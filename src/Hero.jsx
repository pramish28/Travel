import React from "react"
import ReactDOM from "react-dom"
import "./Hero.css"
export default function Hero(){

  return(
    <>
    <section className="hero">
    <img  src="./Image/Mount Everest.png" className="hero-image"/>
    <h1 className="hero-header">
       Mount Everest
      </h1>
      <h6>12 Jan,2021-24 Jan,2021 </h6>
      <p className="hero-text"> 
      Mount Everest is the tallest mountain on Earth, standing at 29,032 feet (8,848 meters) above sea level. Located in the Himalayas on the border of Nepal.It is the most popular tourist destination in Nepal. 
      </p>
      </section>
    </>
    
  )
}