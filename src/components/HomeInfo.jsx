import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-lg text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hey there, I'm <span className='font-semibold'>Matt</span> 👋
            <br />
            A software Engineer from Houston!
        </h1>
    ),
    2: (
        <InfoBox text="Worked on lots different projects and picked up many skills along the way"
            link='/about'
            btnText='Learn More!' />
    ),
    3: (
        <InfoBox text="Interested in what I can do? Check out some of my projects!"
            link='/projects'
            btnText='Visit my Portfolio!' />
    ),
    4: (
        <InfoBox text="Want to get into contact or looking to get a project done? I'm only a few keystrokes away!"
            link='/contact'
            btnText='Reach out to me!' />
    ),
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo