import React from 'react'
import { useEffect, useRef } from 'react';

const About = () => {

    const canvas = useRef(null)
    const banner = useRef(null)

    useEffect(() => {

        const c = canvas.current.getContext("2d");
        const header = banner.current
        let width = header.offsetWidth;
        let height = header.offsetHeight;
        let circles = []
        let colors = ["255, 255, 255"]


        function setDimensions(e) {
            width = header.offsetWidth;
            height = header.offsetHeight;
            canvas.current.width = width;
            canvas.current.height = height;
        }

        //Circle Prototype
        function Circle(x, y, radius, yd, xd, hue) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.yd = yd;
            this.xd = xd;
            this.hue = hue;
            this.outerAlpha = 0;
            this.flying = false;
            this.flyTime = 0;

            this.draw = function () {
                c.beginPath();
                c.fillStyle = `rgba(${this.hue},${this.outerAlpha})`;
                c.lineWidth = 1;
                c.strokeStyle = `rgba(${this.hue},${this.outerAlpha - .4})`;
                c.moveTo(this.x, this.y);
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.lineTo(this.x + this.xd * this.flyTime, this.y - this.yd * this.flyTime);
                c.stroke();
                c.fill();
            };

            // control the circle movement
            this.update = function () {
                let rng = Math.floor(Math.random() * 300)
                if (rng === 0 && !this.flying && this.outerAlpha <= 0) {

                    this.flyTime = 0;
                    this.flying = true;
                    this.y = Math.random() * (height);
                    this.x = Math.random() * (width - radius * 2) + radius
                }
                if (this.flying) {
                    this.outerAlpha = Math.random() * (.7 - .51) + .51;
                    this.x -= this.xd;
                    this.y += this.yd;
                    this.flyTime++
                }
                if (this.y > height) {
                    this.outerAlpha -= .008;
                    this.flying = false;
                }
                this.draw();
            };
        }

        //Generate Circles
        function createCircle(count) {
            for (let i = 0; i < count; i++) {
                let radius = Math.random() * 2,
                    x = Math.random() * (width - radius * 2) + radius,
                    y = 0,
                    xd = Math.random() * (10 - 8) + 8,
                    yd = Math.random() * (7 - 5) + 5,
                    hue = colors[0];
                circles.push(new Circle(x, y, radius, yd, xd, hue));
            }
        }
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, width, height);
            circles.forEach(circle => {
                circle.update();
            });
        }

        setDimensions();
        createCircle(6);
        animate();


    }, [])


    return (
        <div id="home" ref={banner}>
            <section className="text-white bg-gray-900 z-10" role="banner">
                <canvas id="canvas" ref={canvas}></canvas>
                <div className="" id="content">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1
                            className="text-4xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        >
                            Kurtis Soroka
                        </h1>

                        <p className="max-w-2xl mx-auto mt-6 text-lg">
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

export default About