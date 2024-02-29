import React from 'react'
import CSS from '../assets/cssimg.png'
import Github from '../assets/githubimg.png'
import HTML from '../assets/htmlimg.png'
import JS from '../assets/javascriptimg.png'
import Python from '../assets/pythonimg.png'
import ReactIcon from '../assets/reactimg.png'
import Java from '../assets/javaimg.png'
import C from '../assets/cimg.png'

const Skills = () => {
  return (
    <div name = 'skills' className='w-full h-screen bg-[#e8e7e6] text-[#374151]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#000000]'>Skills</p>
                <p className='py-4'>Below are the languages and software I have worked with. </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Python} alt="Python"/>
                    <p>Python</p>
                </div>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Java} alt="Java"/>
                    <p>Java</p>
                </div>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={JS} alt="JavaScript"/>
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Github} alt="Github"/>
                    <p>Github</p>
                </div>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={CSS} alt="CSS"/>
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={HTML} alt="HTML"/>
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={ReactIcon} alt="React"/>
                    <p>React</p>
                </div>
                <div className='shadow-md shadow-[#d1d0cf] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={C} alt="C"/>
                    <p>C</p>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Skills