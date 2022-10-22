import React, { useState } from "react";
import "./Hero.css"
import dummyImg from "../../assets/dummyImg.jpg"
import * as memeService from "../../services/memeService";

export default function Hero(){
    const defaultMeme = memeService.default()[5]
    let [meme , setMeme] = React.useState(defaultMeme)
    let [upperText, setUpperText] = useState("Upper Text")
    let [bottomText, setBottomText] = useState("Bottom Text")
    let [author, setAuthor] = useState("achilli")


   async function getRandomMeme() {
        const randomNumber = Math.floor(Math.random()*(memeService.default().length-1))
        console.log(randomNumber)
        const newMeme = await memeService.default()[randomNumber]
        setMeme(newMeme)
    }
    async function createMeme(id,upperText,bottomText){
        let createdMemeURL
        await memeService.MakeMeme(id,upperText,bottomText).then((url)=>createdMemeURL=url )
        setMeme({...meme,url:createdMemeURL}) 
    
    }

    return(
        <div>
            <div className="hero">
                <form className="inputs">
                    <input className="input" onChange={e =>{setUpperText(e.target.value)} } type="text" placeholder="Top text of meme" />
                    <input className="input" onChange={e =>{setBottomText(e.target.value)} } type="text" placeholder="Bottom text of meme" />
                    {/* <input className="input" onChange={e =>{setAuthor(e.target.value);} } type="text" placeholder="Bottom text of meme" /> */}
                </form>
                <img id="meme" src={meme.url}/>
        </div>
        <div className="buttons">
            <button onClick={() => getRandomMeme()}>Get a new meme image 🖼️</button>
            <button onClick={() => createMeme(meme.id,upperText,bottomText)}>Generate Meme</button>
        </div>
        </div>
    )
}