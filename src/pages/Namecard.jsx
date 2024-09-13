/* eslint-disable no-unused-vars */
import React from "react";
// import { Outlet } from "react-router-dom";
// import About from "./About";

export default function Namecard(){
    return(
        <>
        <section id = "namecard"className="name-card">
            <div className="name-card-info">
                <h1>Hi I am Vaishnavi Bhattaru, <br /> A Web Developer</h1>
                <p>Computer Science graduate specializing in full-stack development, proficient in modern frameworks like React.js,
Angular, typescript, Next.js, Node.js, and Express.js. Skilled in cloud integration with AWS, Firebase, and Azure
to build scalable, performance-driven web applications. Experienced in optimizing both front-end and back-end
systems, with a focus on delivering user-centric designs and data-driven solutions that enhance user experience and
system efficiency.</p>
    <a href="public/assets/Vaishnavi.Bhattaru.Resume.pdf" download>Download CV</a>
            </div>
            <div className="name-card-img">
                <img src="Vaishnavi.png" alt="My photo" />
            </div>
        </section>
        {/* <About /> */}
        {/* <Outlet /> */}
        </>
    )
}