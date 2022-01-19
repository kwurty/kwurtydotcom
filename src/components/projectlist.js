import React from 'react'
import Project from './project';
import { projects } from './projects';

function projectlist() {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                <article>
                    <h2 className="text-2xl pt-6 font-extrabold text-gray-900">Projects</h2>
                    <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">

                        {
                            projects.map(project => {
                                return (
                                    <Project project={project}></Project>
                                )
                            })
                        }
                    </section>
                </article>
            </section>
        </div>
    )
}

export default projectlist
