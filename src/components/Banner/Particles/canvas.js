import React from 'react';
import Particles from "react-tsparticles";
import './canvas.css';

export default function canvas() {

    return (
        <div className="absolute w-full">

            <Particles
                id='tsparticles'
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: -12
                    },
                    particles: {
                        number: {
                            value: 200,
                            limit: 300,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            },
                            polygon: {
                                nb_sides: 5
                            },
                            image: {
                                src: "images/github.svg",
                                width: 100,
                                height: 100
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.5,
                                sync: false
                            }
                        },
                        size: {
                            value: 30,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 10,
                                sync: false
                            }
                        },
                        links: {
                            enable: false
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {

                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                lineLinked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 100,
                                duration: 2,
                                opacity: 1,
                                speed: 2
                            },
                            repulse: {
                                distance: 200
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    detectRetina: true,
                    fpsLimit: 60,
                }}
            />
        </div>
    );
}
