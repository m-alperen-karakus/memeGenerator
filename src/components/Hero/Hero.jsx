import React from "react";
import "./Hero.css"
import dummyImg from "../../assets/dummyImg.jpg"
export default function Hero(){
    return(
        <div className="hero">
            <div className="inputs">
                <input className="input" />
                <input className="input" />
            </div>
            <button>Get a new meme image 🖼️</button>
            <img src={dummyImg}/>
        </div>
    )
}