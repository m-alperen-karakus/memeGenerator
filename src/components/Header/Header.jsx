import React from "react";
import "./Header.css"
import Logo from "../../assets/Logo.svg"
export default function Header(){
    return(
        <nav>
            <div className="navbar">
                <img src={Logo}  />
                <div>React Course - Project 3</div>
            </div>
            
        </nav>
    )
}