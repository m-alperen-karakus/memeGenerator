import React from "react"
export default function getMemes(){
        let httpRequest = new XMLHttpRequest()
        httpRequest.open("GET" , "https://api.imgflip.com/get_memes",false)
        httpRequest.send( null )
        try{
          let memes=[]
          JSON.parse(httpRequest.responseText).data.memes.map(meme => {
              if(meme.box_count == 2){
                memes.push(meme)
              }})

              return memes
          }
        catch{
          return JSON.parse(httpRequest.responseText)?.error_message
        }
}
export async function MakeMeme(id,text0,text1){
  const API_KEY = {
    username:"achilli",
    password:"CWnaUqpaGiO21JE",
    }

 
let url=`https://api.imgflip.com/caption_image?template_id=${id}&username=${API_KEY.username}&password=${API_KEY.password}&text0=${text0}&text1=${text1}`

const res=await fetch(url)
const resData = await res.json()
console.log(resData.data)
  try{
    return resData.data.url
  }
  catch{
    return resData.error_message
  }

 
}



