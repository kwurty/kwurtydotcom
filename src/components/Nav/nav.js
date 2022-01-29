
import React from 'react'
import './nav.css'
export default function nav() {

    return (
        <div className='z-10 relative'>
            <nav className="bg-gray-800 bg-opacity-100 shadow shadow-gray-300 w-100 px-8 md:px-auto sm:mt-0 sm:pt-0">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center md:justify-between flex-wrap md:flex-nowrap justify-center">

                    <div className="glow text-xl font-extrabold text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 md:order-1 align-middle self-center text-center">
                        kwurty
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">

                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between text-light-red">
                            <li className="md:px-4 md:py-2 hover:text-green-300"><a href="#about">About</a></li>
                            <li className="md:px-4 md:py-2 hover:text-green-300"><a href="#projects">Projects</a></li>
                            <li className="md:px-4 md:py-2 hover:text-green-300"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

