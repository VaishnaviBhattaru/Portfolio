/* eslint-disable no-unused-vars */
import React from "react";

export default function Projects(){
    return(
        <>
        <h3 className="center">Projects</h3>
        <section id="projects" className="project-section">
         
            <div className="project-images"> 
            <div className="project-content">
                <img className="bg" src="app2.png" alt="" />
                <div>
                <h2>Project overview:</h2>
            <p>Developed a web application for users to browse and rent vans, while hosts can list and manage their vans, earnings, and reviews. Built dynamic UI components with React.js, integrated API calls, and utilized Firebase for real-time data storage.</p>
            <a href="https://github.com/VaishnaviBhattaru/VanLife" target="_blank" rel="noopener noreferrer"><button>Take a look</button></a>
            </div>
            </div>
            <div className="project-content">
                <img className="bg" src="app3.png" alt="" />
                <div>
                <h2>Project overview:</h2>
            <p>Developed an investment calculator that computes returns based on inputs such as initial investment, monthly contribution, interest rate, and duration. The app generates a detailed table displaying yearly investment values, interest, total returns, and invested capital.</p>
            <a href="https://github.com/VaishnaviBhattaru/Investment_calculator"  target="_blank" rel="noopener noreferrer"><button>Take a look</button></a>
            </div>
            </div>
            <div className="project-content">
                <img className="bg" src="app4.png" alt="" />
                <div>
                <h2>Project overview:</h2>
            <p>Built a multi-user tasks management app using Angular and TypeScript. Implemented features allowing users to add and remove tasks in a shared environment, ensuring smooth collaboration and real-time updates.</p>
            <a href="https://github.com/VaishnaviBhattaru/TasksApp"  target="_blank" rel="noopener noreferrer"><button>Take a look</button></a>
            </div>
            </div>
            <div className="project-content">
                <img className="bg" src="app5.png" alt="" />
                <div>
                <h2>Project overview:</h2>
            <p>Developed a web application replicating a notes app using React.js for the front-end and Firebase for the back-end. Implemented real-time data storage and retrieval with Firebase, ensuring a smooth and responsive user experience.</p>
            <a href="https://github.com/VaishnaviBhattaru/Notes_app"  target="_blank" rel="noopener noreferrer"><button>Take a look</button></a>
            </div>
            </div>
            </div>
            

        </section>
        </>
    )}