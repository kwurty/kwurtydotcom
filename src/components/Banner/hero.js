import React from 'react'
import Canvas from './Particles/canvas';

export default function about() {
    return (
        <div id="home">
            <section className="text-white bg-gray-900 z-10" role="banner">
                <div className="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8 sm:py-36 lg:h-screen lg:flex lg:items-center z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1
                            className="text-4xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        >
                            Kurtis Soroka
                        </h1>

                        <p className="max-w-xl mx-auto mt-6 text-lg">
                            <ul className="list-inside md:inline-block">
                                <li className="md:inline text-sm sm:text-lg">
                                    System Administrator
                                </li>
                                <span className="text-purple-600 hidden md:inline" > | </span>
                                <li className="md:inline text-sm sm:text-lg">
                                    Javascript Enthusiast
                                </li>
                                <span className="text-purple-600 hidden md:inline"> | </span>
                                <li className="md:inline text-sm sm:text-lg">
                                    Aspiring Full Stack Developer
                                </li>
                            </ul>
                        </p>

                        <div className="mt-8 flex justify-center flex-column">
                            <a href="#">
                                <button className="block mx-2 py-3 px-5 font-medium bg-purple-600 rounded-lg hover:bg-purple-500">
                                    Resume

                                </button>
                            </a>

                            <a href="https://github.com/kwurty" target={'_blank'} rel="noreferrer">

                                <button
                                    className="block mx-2 py-3 px-5 font-medium border border-purple-600 rounded-lg hover:border-purple-500"
                                >
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}
