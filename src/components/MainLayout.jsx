/* eslint-disable no-unused-vars */
import React from "react";
import {Outlet} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import LeftNav from "./LeftNav";


export default function MainLayout(){
    return(
        <>
       <Header />
       {/* <LeftNav /> */}
       <Outlet />
       <Footer />
       </>
    )
}