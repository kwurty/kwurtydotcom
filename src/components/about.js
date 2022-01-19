import React from 'react'

export default function about() {
    return (
        <div>
            <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40 text-white">
                <div className="grid justify-center items-center order-1 col-span-1">
                    <img className="lg:h-80 md:h-64 h-40 rounded-full" src="https://media-exp1.licdn.com/dms/image/C4D03AQFkmjCMtPBzJA/profile-displayphoto-shrink_800_800/0/1560278006679?e=1645660800&v=beta&t=C6ijPT7se_2wa7tG1Zw_I-FsKQsq2slCExA_Cy7m3oI" alt="" />
                </div>
                <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
                    <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Kurtis</h1>
                    <p className="text-lg text-gray-800 text-center md:text-left">I am an aspiring full stack developer and current systems administrator.</p>
                    <p className="text-lg text-gray-800 text-center md:text-left">I make web apps using React and Vue. I am experienced in version control, database administration, and virtualization. </p>
                    <p>

                    </p>
                    <button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">View Resume</button>
                </div>
            </div>
        </div>
    )
}
