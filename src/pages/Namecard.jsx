/* eslint-disable no-unused-vars */
import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Namecard(){
    useGSAP(()=>{
        gsap.fromTo('.img',{
            x:0,
            scale:0.25,
            opacity:0
            
        },{
            opacity:1,
            scale:1,
            duration:1,
            ease:"power1.in"
        })
        gsap.fromTo('.title',{
            y:5,
            opacity:0,
            
        },{
            y:0,
            opacity:1,
            ease: "power1.in",
            delay:1
        })

    },[])
    function openPDF() {
        // const pdfUrl = process.env.PUBLIC_URL + '/myfile.pdf';
        window.open('Vaishnavi.Bhattaru.Resume.pdf', '_blank');

    }
    return(
        <>
        <div className=" pt-28 pb-16 h-[60vh] sm:w-[100vw] sm:h-[100vh] bg-[#cbc3db]">
        <section id = "namecard"
        className=" pt-25 h-full w-full flex flex-col md:flex-col sm:flex-row justify-evenly items-center sm:h-[87vh] md:h-[87vh] ">
            
        <div className=" [flex-basis:40%] ">
                <img className = 'img h-80 sm:h-[40vh] md:h-80 rounded-full hover:[filter:drop-shadow(0_5px_10px_#300e6f)]  'src="V.png" alt="My photo" />
            </div>
            <div className="title pt-5 flex flex-col items-center gap-4 pl-4 [flex-basis:45%] font-extrabold">
                <h1 className="font-bold text-center  text-[2rem]">Hi I am <div className="hover:text-[#4a2c81] decoration-0"> Vaishnavi Bhattaru ,</div> A Web Developer</h1>
                {/* <p>Computer Science graduate specializing in full-stack development, proficient in modern frameworks like React.js,
Angular, typescript, Next.js, Node.js, and Express.js. Skilled in cloud integration with AWS, Firebase, and Azure
to build scalable, performance-driven web applications. Experienced in optimizing both front-end and back-end
systems, with a focus on delivering user-centric designs and data-driven solutions that enhance user experience and
system efficiency.</p> */}
<a href='VaishnaviBResume.pdf' target="_blank" rel="noopener noreferrer">
    <button className=" btn-primary hover:bg-violet-700">Download CV</button>
    </a>
            </div>
            
        </section>
        </div>
        {/* <About /> */}
        {/* <Outlet /> */}
        </>
    )
}
