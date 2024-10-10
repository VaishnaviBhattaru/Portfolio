/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { DiAngularSimple } from "react-icons/di";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { frontEndFrameworks, frontEndTechnologies, webDesignTools, backEndTechnologies } from "./data";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const headingRef = useRef(null);
    const topItemsRef = useRef([]);
    const backItemsRef = useRef([]);


    useEffect(() => {
         // Heading animation with ScrollTrigger
         gsap.fromTo(
          headingRef.current,
          { y: -50, opacity: 0 },
          {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: headingRef.current,
                  start: 'top 75%', // Trigger when 75% of the heading is in view
                  toggleActions: "play none none reset"
              }
          }
      );

      // Grouped animation for left section (topItemsRef)
      gsap.fromTo(
          topItemsRef.current,
          { x: -100, opacity: 0 },
          {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              stagger: 0.3, // Stagger the animations
              scrollTrigger: {
                  trigger: topItemsRef.current[0], 
                  start: "top center",
                  toggleActions: "play none none reset",
              }
          }
      );

      // Grouped animation for right section (backItemsRef)
      gsap.fromTo(
          backItemsRef.current,
          { x: 100, opacity: 0 },
          {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              stagger: 0.3,
              scrollTrigger: {
                  trigger: backItemsRef.current[0], 
                  start: "top center",
                  toggleActions: "play none none reset", 
              }
          }
      );
    }, []);

    return (
        <section className="sec flex flex-col w-[100%] pb-[100px] pt-10 h-full items-center sm:h-auto text-[#ECE6DE] bg-[#300e6f]" id="about">
            <h1 ref={headingRef} className="heading font-bold">About Me</h1>

            <div className="pt-10 flex sm:flex-row flex-col w-[85vw] h-auto gap-4">
                {/* Left Section */}
                <div className="p-7 text-justify flex flex-col sm:[flex-basis:50%] w-full sm:w-[50%] sm:p-4 gap-4">
                    <h2 ref={(el) => (topItemsRef.current[0] = el)} className="left font-bold text-[14px] pb-2">A little bit about me</h2>
                    <p ref={(el) => (topItemsRef.current[1] = el)} className="left text-[14px] sm:text-[16px]">
                        Hi! I am Vaishnavi, a Computer Science graduate with a passion for <b>full-stack
                            development</b> and creating efficient, user-centric web applications.
                        I specialize in modern frameworks such as React.js, Angular, Next.js,
                        and Express.js, and have extensive experience with cloud platforms like AWS,
                        Firebase, and Azure, which allows me to deliver scalable, performance-driven solutions.
                    </p>
                    <p ref={(el) => (topItemsRef.current[2] = el)} className="left text-[14px] sm:text-[16px]">
                        Throughout my journey, I’ve worked on a variety of projects, from building seamless user interfaces to optimizing back-end systems. I’m dedicated to creating applications that are both intuitive and high-performing, always aiming to improve user experience and system efficiency.
                    </p>
                    <p ref={(el) => (topItemsRef.current[3] = el)} className="left text-[14px] sm:text-[16px]">
                        Beyond development, I find joy in painting and singing, as well as experimenting in the kitchen with new recipes. And yes, I love tasting the results of my cooking – enjoying a great meal is just part of the fun!
                    </p>
                    <p ref={(el) => (topItemsRef.current[4] = el)} className="left text-[14px] sm:text-[16px]">
                        I’m always eager to collaborate on projects that combine creativity and technical expertise. Let’s work together to build something impactful!
                    </p>
                </div>

                {/* Right Section */}
                <div className="right p-7 flex flex-col sm:[flex-basis:50%] sm:w-[50%] sm:p-2 text-left">
                    <h2 ref={(el) => (backItemsRef.current[0] = el)} className="font-bold text-[12px] pb-2">My Skills</h2>

                    <div className="flex flex-col">
                        <h2 ref={(el) => (backItemsRef.current[1] = el)}>Web Design Tools</h2>
                        <div ref={(el) => (backItemsRef.current[2] = el)} className="flex flex-row flex-wrap">
                            {webDesignTools.map((item, i) => (
                                <span className="pt-[5px] sm:px-[2px]" key={i}>{item}</span>
                            ))}
                        </div>

                        <h2 ref={(el) => (backItemsRef.current[3] = el)}>Front-end Technology</h2>
                        <div ref={(el) => (backItemsRef.current[4] = el)} className="flex flex-row flex-wrap">
                            {frontEndTechnologies.map((item, i) => (
                                <span className="pt-[5px] sm:px-[2px]" key={i}>{item}</span>
                            ))}
                        </div>

                        <h2 ref={(el) => (backItemsRef.current[5] = el)}>Front-End Framework</h2>
                        <div ref={(el) => (backItemsRef.current[6] = el)} className="flex flex-row flex-wrap">
                            {frontEndFrameworks.map((item, i) => (
                                <span className="pt-[5px] sm:px-[2px]" key={i}>{item}</span>
                            ))}
                        </div>

                        <h2 ref={(el) => (backItemsRef.current[7] = el)}>Back-End Framework</h2>
                        <div ref={(el) => (backItemsRef.current[8] = el)} className="flex flex-row flex-wrap">
                            {backEndTechnologies.map((item, i) => (
                                <span className="pt-[5px] sm:px-[2px]" key={i}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
