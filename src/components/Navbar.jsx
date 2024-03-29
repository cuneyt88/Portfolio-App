import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import cv from '../assets/Cüneyt ARI-Frontend Developer CV.pdf'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:"70px"}} />
        </div>

        {/*Menu*/}
        
            <ul className='hidden md:flex'>
                <li className='hover:text-pink-600'>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='hover:text-pink-600'>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
        
        
        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile Menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

        {/*Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/cuneytekremari/" target="_blank">
                            Linkedin<FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/cuneyt88" target="_blank">
                            Github<FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto:cuneyt7088@gmail.com">
                            Email<HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-300'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={cv} target="_blank">
                            Resume<BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar