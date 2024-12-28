import React from "react";
import Navbar from "../Components/Navbar";
import HeroImage from "../Assets/Images/hero.svg"
import Button from "../Components/Buttons";

export default function LandingPage() {
  return (
    <React.Fragment>
      <Navbar variant="primary-variant" />
      <Hero />
    </React.Fragment>
  )
}

function Hero() {
  return (
    <div id="hero">
      <div className="container">
        <div className="wrapper">
          <div className="hero-text col-5">
            <h1>Produk Berkualitas ditangan mu!</h1>
            <p>Eksplor, cari, dan tambahkan produk yang menarik perhatian mu!</p>
            <Button onClick={() => window.location.href = "/login"} type="solid-btn-primary"> <i className="fa-solid fa-arrow-right-from-bracket"></i> Start shopping</Button>
          </div>
          <div className="hero-image col-5">
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
    </div >
  )
}