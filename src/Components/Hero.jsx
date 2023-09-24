import React from 'react'
import {FaHome} from "react-icons/fa";
import { herobanner } from '../assets';

function Hero() {
  return (
    <div>
            <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                <p className="hero-subtitle">
                    <FaHome />

                    <span>Real Estate Agency</span>
                </p>

                <h2 className="h1 hero-title">Find Your Dream House By Us</h2>

                <p className="hero-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore.
                </p>

                <button className="btn">Make An Enquiry</button>
                </div>

                <figure className="hero-banner">
                <img
                    src={herobanner}
                    alt="Modern house model"
                    className="w-100"
                />
                </figure>
            </div>
            </section>
    </div>
  )
}

export default Hero