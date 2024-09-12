/* eslint-disable no-unused-vars */
import React from "react";
import { HashLink } from 'react-router-hash-link';


export default function Header(){
    return(
     <header>
        <nav className="header-nav">
            <div className="header-name">
        <img src="Avatar.png" alt="" /> <HashLink to="/#namecard"><h1>Vaishnavi Bhattaru</h1></HashLink>
        </div>
            <div>
            <HashLink to="/#about">About</HashLink>
            <HashLink to="/#projects">Projects</HashLink>
            <HashLink to="/#contact"> Contact me</HashLink>
            </div>
        </nav>
     </header>   
    )
}
