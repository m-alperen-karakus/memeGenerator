import React from "react"
import Hero from "./components/Hero/Hero"
import Header from "./components/Header/Header"
import data from "../data"
import memeService from "./services/memeService"
import Blog from "./components/Blog/Blog"


function App() {
  return (
    <>
    <Header />
    <Hero />
    <Blog />
    </>
  )
}

export default App
