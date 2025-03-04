import React from 'react'

const About = () => {
  return (
    <div name = 'about' className='w-full h-screen bg-[#e8e7e6] text-[#374151]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#000000]'>
                    About
                    </p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm: text-left text-4xl font-bold'>
                        <p>
                        Hi. On this page you will find my bio. To contact me, you can interact
                        with the email icon on the left.
                        </p>
                    </div>
                    <div className='text-xl'>
                        <p>
                        EX: I am currently a computer science student at the University of Massachusetts. 
                        I plan to specialize in AI and have a staunch interest in AI's application in
                        to data analysis. Aside from that, I was born in Woodland Hills, California and 
                        currently reside in Amherst, Massachusetts. I love playing volleyball and enjoy bodybuilding.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About