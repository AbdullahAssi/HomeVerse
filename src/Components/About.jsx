import React from 'react'
import {FaHome} from "react-icons/fa";
import {BiLeaf, BiWine, BiCheckShield} from "react-icons/bi";
import { aboutbanner1, aboutbanner2 } from '../assets';


function About() {
    return (
        <div>
            
            <section className="about" id="about">
            <div className="container">
                <figure className="about-banner">
                <img
                    src={aboutbanner1}
                    alt="House interior"
                />

                <img
                    src={aboutbanner2}
                    alt="House interior"
                    className="abs-img"
                />
                </figure>

                <div className="about-content">
                <p className="section-subtitle">About Us</p>

                <h2 className="h2 section-title">
                    The Leading Real Estate Rental Marketplace.
                </h2>

                <p className="about-text">
                    Over 39,000 people work for us in more than 70 countries all
                    over the This breadth of global coverage, combined with
                    specialist services
                </p>

                <ul className="about-list">
                    <li className="about-item">
                    <div className="about-item-icon">
                        <FaHome />
                    </div>

                    <p className="about-item-text">Smart Home Design</p>
                    </li>

                    <li className="about-item">
                    <div className="about-item-icon">
                        <BiLeaf />
                    </div>

                    <p className="about-item-text">Beautiful Scene Around</p>
                    </li>

                    <li className="about-item">
                    <div className="about-item-icon">
                        <BiWine />
                    </div>

                    <p className="about-item-text">Exceptional Lifestyle</p>
                    </li>

                    <li className="about-item">
                    <div className="about-item-icon">
                        <BiCheckShield />
                    </div>

                    <p className="about-item-text">Complete 24/7 Security</p>
                    </li>
                </ul>

                <p className="callout">
                    "Enimad minim veniam quis nostrud exercitation llamco laboris.
                    Lorem ipsum dolor sit amet"
                </p>

                <a href="#service" className="btn">Our Services</a>
                </div>
            </div>
            </section>
        </div>
    )
}

export default About