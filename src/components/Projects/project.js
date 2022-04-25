import React, { useState } from 'react';




export default function project({ title, github, view, imgUrl, description, inProduction, tools, learned }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        if(isOpen){
            setIsOpen(false)
        }
    }

    return (
        <div onClick={
            (e) => {
                if(e.target.id === "defaultModal") {
                    closeModal()
                }
            }
        }>
            <div id="defaultModal" aria-hidden="true" className={`${isOpen ? 'visible' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0`}>
                <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                {title}
                            </h3>
                            <button onClick={(e) => { e.preventDefault(); closeModal(); }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex justify-center">
                                {tools.map((tool) => {
                                    return (
                                        <div className="flex flex-col px-4 align-middle justify-center">
                                            <div className="block">
                                                <i className={`${tool} text-3xl pr-0 w-full self-center text-green-400`} alt={tool.split('-')[1]}> </i>

                                            </div>
                                            <div className='block'>
                                                <label htmlFor=""> {tool.split('-')[1].charAt(0).toUpperCase() + tool.split('-')[1].slice(1)} </label>

                                            </div>
                                        </div>
                                    )
                                })}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {learned}
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

                            <button className="block mx-2 py-3 px-5 font-medium bg-purple-600 rounded-lg hover:bg-purple-500 text-white" onClick={(e) => {
                                e.preventDefault()
                                window.open(view, "_blank")
                                closeModal()
                            }}>
                                View Production
                            </button>

                            {
                                github.map((item, ind) => {
                                    return <button
                                        className="block mx-2 py-3 px-5 font-medium border border-purple-600 rounded-lg hover:border-purple-800 text-purple-500 hover:text-purple-800"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            window.open(item.url, "_blank")
                                            closeModal()
                                        }}
                                    >
                                        Github - {item.name}
                                    </button>
                                })
                            }
                            



                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden cursor-pointer" onClick={(e) => {
                setIsOpen(true)
            }}>
                <div className="h-72 object-cover">
                    <img
                        src={imgUrl}
                        alt="portfolio"
                        className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-green-400 rounded-md px-2">
                    {title}
                </h1>
                {
                    inProduction ? (


                        <div>
                            <div className="absolute bottom-2 opacity-75 text-gray-50 font-bold text-4xl w-full bg-red-400 h-10">
                            </div>
                            <h1 className="absolute bottom-2 left-24 text-white font-bold text-4xl z-10">
                                IN PRODUCTION
                            </h1>
                        </div>
                    ) :
                        <h1 className="bg-gray-800 absolute bottom-2 bg-opacity-75 text-gray-50 font-bold text-lg w-full py-2">
                            {description}
                        </h1>
                }

            </div>
        </div>
    )
}
