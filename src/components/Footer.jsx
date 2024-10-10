/* eslint-disable no-unused-vars */
import React from "react";
import { HashLink } from 'react-router-hash-link';

export default function Footer(){
    return(
        <>
        <footer className="w-full h-[20vh] sm:h-[30vh] flex flex-col items-center bg-[#300e6f] text-white">
            <div className="flex flex-row justify-center gap-4  mt-10 pb-6">
            <div className="flex flex-col w-[45vw] justify-center items-center text-left ">
                <ul className="flex flex-col  gap-2">
                    <li>Say Hello</li>
                    <li className="flex flex-row gap-2"><a  href="https://github.com/VaishnaviBhattaru"  target="_blank" rel="noopener noreferrer"><img className="h-9" src="Github icon.png" alt="Github" /></a>
            <a  href="https://www.linkedin.com/in/vaishnavibhattaru/"  target="_blank" rel="noopener noreferrer"><img className="h-9" src="Linkedin icon (3).png" alt="Github" /></a>
            <a  href="mailto:sbhatt86@asu.edu"  target="_blank" rel="noopener noreferrer"><img className="h-9" src="Mail icon.png" alt="Mail" /></a>
            </li>
                </ul>
            </div>
            <div className="flex flex-col w-[45vw] justify-center items-center text-left">
                <ul className="flex flex-col  gap-2">
                    <li><HashLink className="hover:text-[#8276cf]" to="/#about">About</HashLink></li>
                    <li><HashLink className="hover:text-[#8276cf]" to="/#projects">Projects</HashLink></li>
                    <li><HashLink className="hover:text-[#8276cf]" to="/#contact"> Contact Me</HashLink></li>
                </ul>
            </div>
            </div>
            <hr className="w-[80vw] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-white" />
            <h1 className="relative bottom-[-5vh] sm:bottom-0 text-[12px] sm:text-[14px] text-white">Ⓒ Vaishnavi Bhattaru  Copyright 2024</h1>
            
            </footer>
        <a href="https://www.flaticon.com/free-icons/email" title="email icons"></a>
        </>
    )
}