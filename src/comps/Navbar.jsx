import React, {useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/logo.png'
import { RiLinkedinBoxLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineMailOutline,} from "react-icons/md";
import { Link } from 'react-scroll'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-100'>
        <div>
            <img src={logo} alt="logo" style={{width: '80px'}}/>
        </div>

    
        <ul className='hidden md:flex'>
          <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
        </ul>

       
        <div onClick = {handleClick} className='md:hidden z-10'>
         {!nav ? <FaBars/> : <FaTimes/>}
        </div>
         

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
          <li className='py-6 text-5xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li className='py-6 text-5xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li className='py-6 text-5xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
        </ul>


        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
         <ul>
         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                <a className='flex justify-between items-center w-full text-gray-100'
                 href="https://mail.google.com/mail/u/0/?fs=1&to=anirudhpoluru@gmail.com&su=SUBJECT&body=BODY&tf=cm" target="_blank" rel="noopener noreferrer">
                    Email <MdOutlineMailOutline size={30}/>
                </a>
            </li>
           
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                <a className='flex justify-between items-center w-full text-gray-100'
                 href="https://www.linkedin.com/in/anirudh-poluru-a20095241/" target="_blank" rel="noopener noreferrer">
                    Linkedin <RiLinkedinBoxLine size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                <a className='flex justify-between items-center w-full text-gray-100'
                 href="https://github.com/eq-ani" target="_blank" rel="noopener noreferrer">
                    Github <VscGithub size={30}/>
                </a>
            </li>

           
         </ul>
        </div>

    </div>
  )
}

export default Navbar
