import React from "react";
import "./Blog.css"
import * as memeService from "../../services/memeService";


export default function Blog(){
    const top100Memes = memeService.default().map(meme => {
        return <img src={meme.url} className="smallMeme"/> });
    return (
        <>
        <h1 style={{textAlign:"center"}}>All of Meme Templates</h1>
      <div className="allMemes">
        {top100Memes}
      </div>
        
        
        </>
     ) 
}
