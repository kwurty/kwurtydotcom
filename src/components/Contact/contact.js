import React from 'react';

export default function contact() {
    return (
        <div className="bg-gray-800 flex justify-center" id="contact">
            <div className="container">

                <div className=" w-full mx-auto dark:bg-gray-800 antialiased">
                    <h1 className="text-white pl-4 text-2xl md:text-4xl font-bold pt-8 pb-0 text-center md:text-left">
                        Contact
                    </h1>
                    <div className='text-white self-start text-center md:text-left pl-4 md:pl-8'>
                        Let's connect!
                    </div>
                </div>
                <div className="w-full py-0 px-10 pb-10">

                    <div className="mt-8 sm:grid grid-cols-3 sm:space-x-4">
                        <div className="bg-gray-600 p-6 rounded-md mb-4">
                            <span className="text-gray-400 text-md">Location</span>
                            <h2 className="text-gray-100 text-2xl font-semibold">Chicago</h2>
                        </div>
                        <div className="bg-gray-600 p-6 rounded-md mb-4">
                            <span className="text-gray-400 text-md">Github</span>
                            <a href="https://github.com/kwurty" target={"_blank"} rel="noreferrer" >
                                <h2 className="text-gray-100 text-2xl font-semibold">kwurty</h2>
                            </a>
                        </div>
                        <div className="bg-gray-600 p-6 rounded-md mb-4">
                            <span className="text-gray-400 text-md">LinkedIn</span>
                            <a href="https://linkedin.com/in/kurtissoroka" target={"_blank"} rel="noreferrer" >
                                <h2 className="text-gray-100 text-2xl font-semibold">kurtissoroka</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
