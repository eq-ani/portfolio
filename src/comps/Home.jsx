import React from 'react'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e8e7e6]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-2xl text-[#323b49]'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#374151]'>Anirudh Poluru</h1>
        <p className='text-[#272e39] py-6 max-w-[700px] '>
        I am a student developer honing my skills with various programming languages,
        specializing in the backend. I am currently focused on building important
        and useful projects with python, java, and javsascript. On this site you will find
        my about me and practical skills. To view my experience, soft skills, and projects,
        my github, linkedin, and resume can be found on the left. 
        </p>
      </div>
    </div>
  )
}

export default Home