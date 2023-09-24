import React from 'react'
import {BsFillCarFrontFill} from "react-icons/bs";
import {IoArrowForwardOutline} from "react-icons/io5";
import {PiSwimmingPoolBold} from "react-icons/pi";
import {BiCheckShield} from "react-icons/bi";
import {IoFitnessOutline} from "react-icons/io5";
import {HiOutlineLibrary} from "react-icons/hi";
import {MdOutlineBed} from "react-icons/md";
import {IoHomeOutline} from "react-icons/io5";

function Features() {
    return (
        <div>
                <section class="features">
            <div class="container">
                <p class="section-subtitle">Our Aminities</p>

                <h2 class="h2 section-title">Building Aminities</h2>

                <ul class="features-list">
                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                        <BsFillCarFrontFill />
                    </div>

                    <h3 class="card-title">Parking Space</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                        <PiSwimmingPoolBold />
                    </div>

                    <h3 class="card-title">Swimming Pool</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                        <BiCheckShield />
                    </div>

                    <h3 class="card-title">Private Security</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                        <IoFitnessOutline />
                    </div>

                    <h3 class="card-title">Medical Center</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                        <HiOutlineLibrary />
                    </div>

                    <h3 class="card-title">Library Area</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                        <MdOutlineBed />
                    </div>

                    <h3 class="card-title">King Size Beds</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                        <IoHomeOutline />
                    </div>

                    <h3 class="card-title">Smart Homes</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>

                <li>
                    <a href="#" class="features-card">
                    <div class="card-icon">
                    <IoArrowForwardOutline />
                    </div>

                    <h3 class="card-title">Kid’s Playland</h3>

                    <div class="card-btn">
                    <IoArrowForwardOutline />
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            </section>
        </div>
    )
}

export default Features