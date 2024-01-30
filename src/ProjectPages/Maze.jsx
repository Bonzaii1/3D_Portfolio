import React, { useEffect, useState } from 'react'
import tailwindColors from 'tailwindcss/colors'
import maze from "../constants/Logic_Maze"
import CTA from '../components/CTA'

const Maze = () => {
    const colors = { "transparent": tailwindColors.transparent, "gray": tailwindColors.black, "green": tailwindColors.green["300"], "yellow": tailwindColors.yellow["300"], "red": tailwindColors.red["300"], "purple": tailwindColors.purple["300"] }

    const [numRows, setNumRows] = useState(13)
    const [numCols, setNumCols] = useState(40)
    const [grid, setGrid] = useState(new maze.Maze(numRows, numCols, 0, 0))
    const [isDisabled, setIsDisabled] = useState(false)
    const [generationStep, setGenerationStep] = useState(0)


    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNumRows(11)
                setNumCols(40)
            } else if (window.innerWidth >= 640) {
                console.log("resetting")
                setNumRows(9)
                setNumCols(20)
            } else {
                setNumRows(7)
                setNumCols(10)
            }
        }

        handleResize(); // Initial setup

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [])



    const calculateCellWidth = () => {
        return `${100 / numCols}%`
    }

    const handleReset = () => {
        setGrid(new maze.Maze(numRows, numCols, 0, 0))
        setGenerationStep(0)
        setIsDisabled(false)
    }

    const runDFS = () => {
        grid.current_cell = grid.maze[Math.floor(Math.random() * grid.rows)][Math.floor(Math.random() * grid.cols)]

        grid.current_cell.visited = true
        grid.current_cell.color = "green"
        grid.stack.push(grid.current_cell)
        grid.nodes_visited = 1
        setIsDisabled(true)

        const interval = setInterval(() => {
            if (grid.nodes_visited != grid.total_nodes && grid.stack != 0) {
                const updatedGrid = grid.dfs()
                setGrid(updatedGrid)
                setGenerationStep(step => step + 1)
            } else {
                grid.maze_created = true
                setIsDisabled(false)
                setGenerationStep(0)
                clearInterval(interval)
            }
        }, 10)
    }

    const runBFS = () => {
        grid.current_cell = grid.maze[grid.initial_row][grid.initial_col]
        grid.final_cell = grid.maze[grid.final_row][grid.final_col]

        grid.current_cell.explored = true
        grid.stack = [grid.current_cell]
        setIsDisabled(true)
        const interval = setInterval(() => {
            if (grid.stack.length != 0 && !grid.found) {
                const updatedGrid = grid.bfs()
                setGrid(updatedGrid)
                setGenerationStep(step => step + 1)
            } else {
                setGenerationStep(0)
                clearInterval(interval)
                traceBack()
            }
        }, 5)
    }

    const traceBack = () => {
        grid.found = false
        const interval = setInterval(() => {
            if (!grid.found) {
                const updatedGrid = grid.tracePath()
                setGrid(updatedGrid)
                setGenerationStep(step => step + 1)
            } else {
                setIsDisabled(false)
                clearInterval(interval)
            }
        }, 15);
    }

    return (
        <section className='max-container-GOL'>
            <h1 className='head-text'>
                <span className='blue-gradient_text font-semibold drop-shadow'>Maze</span> Generator!
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Welcome to my Maze Generator / Solver! Click Generate to create a random Maze and then solve to run the Solution. You can then hit reset when you are ready to try another one! The visualization portion of this mini-project was a challenging piece to put together, but it was all the more satisfying watching it run once I figured it out!
                </p>
            </div>

            <div className='content'>
                <div className="grid" style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}>
                    {Array.from({ length: grid.rows }).map((_, rowIndex) => (
                        Array.from({ length: grid.cols }).map((_, colIndex) => (
                            <div key={`${rowIndex},${colIndex}`}
                                className="border"
                                style={{
                                    aspectRatio: 1,
                                    borderTopColor: colors[grid.maze[rowIndex][colIndex].top_border],
                                    borderRightColor: colors[grid.maze[rowIndex][colIndex].right_border],
                                    borderLeftColor: colors[grid.maze[rowIndex][colIndex].left_border],
                                    borderBottomColor: colors[grid.maze[rowIndex][colIndex].bottom_border],
                                    backgroundColor: colors[grid.maze[rowIndex][colIndex].color]
                                }}
                            />

                        ))
                    ))}

                </div>
            </div>

            <div className="bottom">
                <div className="flex justify-center p-3">
                    {
                        grid.maze_created
                            ? <button className="text-white font-medium rounded-lg text-sm w-20 pr-5 pl-3 py-2.5 m-3 text-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#005bbb] hover:cursor-pointer disabled:opacity-50" onClick={runBFS} disabled={isDisabled}>Solve</button>
                            : <button className="text-white font-medium rounded-lg text-sm w-20 pr-5 pl-2 py-2.5 m-3 text-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#005bbb] hover:cursor-pointer disabled:opacity-50" onClick={runDFS} disabled={isDisabled}>Generate</button>

                    }
                    <button className="text-white font-medium rounded-lg text-sm w-20 pr-5 pl-3 py-2.5 m-3 text-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#005bbb] hover:cursor-pointer disabled:opacity-50" onClick={handleReset} disabled={isDisabled}>Reset</button>
                </div>
            </div>

            <hr className='border-slate-200' />

            <CTA />

        </section>
    )
}

export default Maze