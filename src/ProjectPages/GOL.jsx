import React, { useEffect, useRef, useState } from 'react'
import { adjustGrid } from "../constants/Logic_GOL";
import CTA from '../components/CTA';

const GOL = () => {
    const numRows = 11; // You can adjust the number of rows
    const [numCols, setNumCols] = useState(30)

    const [alive, setAlive] = useState(new Set())

    const isStart = useRef(false)

    const [label, setLabel] = useState("Start")

    const handleCellClick = (row, col) => {
        let coords = `${row},${col}`
        setAlive((prevSet) => {
            const newSet = new Set(prevSet);
            if (newSet.has(coords)) {
                newSet.delete(coords);
            } else {
                newSet.add(coords);
            }
            return newSet;
        });


    }

    const runCheck = async () => {
        if (!isStart.current) {
            isStart.current = true
            setLabel("Stop")
            await simulateAdjustGrid()
        } else {
            isStart.current = false
            setLabel("Start")
        }
    }

    const simulateAdjustGrid = async () => {
        if (isStart.current) {
            setAlive((prevAlive) => adjustGrid(prevAlive, numCols, numRows))
            await new Promise(resolve => setTimeout(resolve, 100))
            await simulateAdjustGrid()
        }
    }

    const handleReset = () => {
        setAlive(new Set())
    }

    const handleRandomize = () => {
        handleReset()
        setAlive((prevAlive) => {
            for (let i = 0; i < 50; i++) {
                let row = Math.floor(Math.random() * numRows)
                let col = Math.floor(Math.random() * numCols)

                prevAlive.add(`${row},${col}`)
            }
            return new Set(prevAlive)
        })
    }



    useEffect(() => {
        // Adjust numCols based on screen size
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setNumCols(30);
            } else if (window.innerWidth >= 640) {
                setNumCols(12);
            } else {
                setNumCols(5);
            }
        };

        handleResize(); // Initial setup

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <section className='max-container-GOL'>
            <h1 className='head-text'>
                Conway's <span className='yellow-gradient_text font-semibold drop-shadow'>Game of Life</span>
            </h1>

            <div className='w-full h-full mt-8 p-4 flex flex-col'>
                <div className="grid lg:grid-cols-max md:grid-cols-12 sm:grid-cols-5">
                    {Array.from({ length: numRows }).map((_, rowIndex) => (
                        Array.from({ length: numCols }).map((_, colIndex) => (
                            <div
                                key={`${rowIndex},${colIndex}`}
                                className={`border border-black ${alive.has(`${rowIndex},${colIndex}`) ? "bg-yellow-400" : ""}`}
                                style={{ aspectRatio: `1` }}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                            >
                                {/* You can customize the content of each cell */}
                            </div>
                        ))
                    ))}
                </div>
            </div>
            <div className="w-full h-1/4 z-30">
                <div className="flex justify-center p-3">
                    <div className="text-white font-medium rounded-lg text-sm w-20 pr-5 pl-3 py-2.5 m-3 text-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#005bbb] hover:cursor-pointer" onClick={handleRandomize}>Random</div>
                    <div className="text-white font-medium rounded-lg text-sm w-20 px-5 py-2.5 m-3 text-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#005bbb] hover:cursor-pointer" onClick={runCheck}>{label}</div>
                    <div className="text-white font-medium rounded-lg text-sm w-20 px-5 py-2.5 m-3 text-center bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#0072ff] hover:to-[#005bbb] hover:cursor-pointer" onClick={handleReset}>Reset</div>
                </div>
            </div>

            <hr className='border-slate-200' />

            <CTA />

        </section>
    )
}

export default GOL