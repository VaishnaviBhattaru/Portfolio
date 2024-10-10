/* eslint-disable no-unused-vars */
import React from "react";
import { HashLink } from 'react-router-hash-link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Header(){
    useGSAP(()=>{
        gsap.fromTo('.nav',{
            y:4,
            opacity:0
        },{
            y:0,
            duration:1,
            ease: "power1.in",
            opacity:1,
            stagger:0.25
        })

},[])
   
    

    return(
     <header>
        <nav className="nav absolute flex top-4 rounded-full font-bold mt-0 w-screen h-[5vh] bg-transparent text-[#213547] pl-[2vw] border-2 border-[#300e6f] justify-between  pr-10">
            <div className="flex items-center h-[5vh] ">
            <HashLink to="/#namecard"><h1 className="nav text-[#300e6f] hover:text-[#8276cf]">VB</h1>  </HashLink>
        </div>
            <div className=" m-0 flex gap-4 text-center items-center text-[#300e6f]">
            <HashLink className="nav hover:text-[#8276cf]" to="/#about">About</HashLink>
            <HashLink className="nav hover:text-[#8276cf]" to="/#projects">Projects</HashLink>
            <HashLink className="nav hover:text-[#8276cf]" to="/#contact"> Contact Me</HashLink>
            </div>
        </nav>
     </header>   
    )
}
{/* <img className="cursor-pointer h-[4vh]" src="Avatar.png" alt="" /> */}