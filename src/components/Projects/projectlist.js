import React from 'react'
import Project from './project';
import { projects } from './projects';

function projectlist() {
    return (
        <section className="bg-gray-800" id="projects">
            <div className="max-w-6xl mx-auto bg-gray-800">
                <h1 className="text-white text-3xl md:text-4xl font-bold py-4 text-center md:text-left">
                    Projects
                </h1>
            </div>
            {/* Grid starts here */}
            <div className="bg-[#F1F1F1] bg-gray-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-4 pb-40">
                    {projects.map((proj, idx) => (
                        <ProjectCard
                            title={proj.name}
                            link={proj.github}
                            imgUrl={proj.img}
                            description={proj.about}
                        />
                    ))}
                </div>
            </div>
        </section>


        // <div>
        //     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        //         <article>
        //             <h2 className="text-2xl pt-6 font-extrabold text-gray-900">Projects</h2>
        //             <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">

        //                 {
        //                     projects.map(project => {
        //                         return (
        //                             <Project project={project}></Project>
        //                         )
        //                     })
        //                 }
        //             </section>
        //         </article>
        //     </section>
        // </div>
    )
}
const ProjectCard = ({ title, link, imgUrl, description }) => {
    return (
        <a href={link} className="w-full block shadow-2xl"
            target={"_blank"} rel="noreferrer">
            <div className="relative overflow-hidden">
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
                <h1 className="bg-gray-800 absolute bottom-12 bg-opacity-75 text-gray-50 font-bold text-lg">
                    {description}
                </h1>
            </div>
        </a>
    );
};

export default projectlist
