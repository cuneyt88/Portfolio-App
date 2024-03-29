import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import ts from '../assets/ts.png'
import react from '../assets/React-icon.svg.png'
import sass from '../assets/2560px-Sass_Logo_Color.svg.png'
import github from '../assets/github-mark-white.png'
import tailwind from '../assets/Tailwind CSS.png'
import angular from '../assets/angular.png'
import native from '../assets/react-native.png'
import git from '../assets/git.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 text-xl'> These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={html} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={css} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={sass} alt="sass icon" />
                    <p className='my-4'>SASS</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={tailwind} alt="tailwind icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={ts} alt="ts icon" />
                    <p className='my-4'>TYPESCRIPT</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={javascript} alt="javascript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={react} alt="react icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={native} alt="java icon" />
                    <p className='my-4'>REACT NATIVE</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={angular} alt="react icon" />
                    <p className='my-4'>ANGULAR</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={git} alt="react icon" />
                    <p className='my-4'>GIT</p>
                </div>
                <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 object-contain mx-auto' src={github} alt="github icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills