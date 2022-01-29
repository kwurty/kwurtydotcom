import React from 'react';

export default function about() {
    return (
        <section className="bg-white" id="projects">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
                <h1 className="text-3xl md:text-4xl font-bold py-4 pt-10 text-center md:text-left text-blue-600">
                    About
                </h1>
                <div className="container flex justify-center">

                    <div className='text-gray-800 self-start max-w-4xl flex flex-col justify-center'>
                        <p className="py-4 text-md">
                            I built my first computer when I was 11 years old. My first website was created when I was 13 (granted it was made with tables and a lot of animated spinning skulls). Since then, I have experimented and learned
                            as much as I can in the world of computers. From basic troubleshooting to coding websites, configuring and installing company IT infrastructure, managing dozens upon dozens of servers,
                            and even dabbling in the land of video production - I love learning anything technology based.
                        </p>
                        <p className='text-white py-4 rounded-full mb-6 text-xl bg-gray-800'>
                            Currently, my goal is to land a position as a <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text"> DevOps </span> or <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"> FullStack Developer </span>.
                        </p>

                        <p className="mb-20">
                            Please check out some of my projects and send me a message if you believe I would be a good fit for your company!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
