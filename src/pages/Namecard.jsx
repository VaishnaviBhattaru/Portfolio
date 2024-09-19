/* eslint-disable no-unused-vars */
import React from "react";
// import { Outlet } from "react-router-dom";
// import About from "./About";

export default function Namecard(){
    function openPDF() {
        // const pdfUrl = process.env.PUBLIC_URL + '/myfile.pdf';
        window.open('Vaishnavi.Bhattaru.Resume.pdf', '_blank');

    }
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
<a href='Vaishnavi.Bhattaru.Resume.pdf' target="_blank" rel="noopener noreferrer">
    <button>Download CV</button>
    </a>
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