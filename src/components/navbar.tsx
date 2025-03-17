// import { useState } from "react";
import "../assets/styles/navbar.sass"
import { NavLink } from "react-router";

export default function Navbar() {

    // const [isOpen, setIsOpen] = useState(false);

    return(
        <nav>
            <div className="nav"> 
                <div className="logo-title">AlgorithmsShowcase</div>
                <div className="routes">
                    <NavLink to ="/" end> Home</NavLink>
                    <NavLink to ="/algorithms" end> Algorithms</NavLink>
                    <NavLink to ="/about" end> About</NavLink>
                </div>
                <div className="account-button">
                    <button>Account</button>
                </div>
            </div>
        </nav>
    );
}

