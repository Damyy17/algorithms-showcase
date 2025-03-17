// import { useState } from "react";
import { Outlet } from "react-router";
import "../assets/styles/mainpage.sass"
import Navbar from "../components/navbar";

export default function MainPage() {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
        
    );
}