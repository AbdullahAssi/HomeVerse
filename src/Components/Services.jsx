import React from 'react'
import {IoIosArrowRoundForward} from "react-icons/io";
function Services() {
    return (
        <div>
                <section class="service" id="service">
            <div class="container">
                <p class="section-subtitle">Our Services</p>

                <h2 class="h2 section-title">Our Main Focus</h2>

                <ul class="service-list">
                <li>
                    <div class="service-card">
                    <div class="card-icon">
                        <img src="/src/assets/service-1.png" alt="Service icon" />
                    </div>

                    <h3 class="h3 card-title">
                        <a href="#">Buy a home</a>
                    </h3>

                    <p class="card-text">
                        over 1 million+ homes for sale available on the website, we
                        can match you with a house you will want to call home.
                    </p>

                    <a href="#" class="card-link">
                        <span>Find A Home</span>

                        <IoIosArrowRoundForward />
                    </a>
                    </div>
                </li>

                <li>
                    <div class="service-card">
                    <div class="card-icon">
                        <img src="/src/assets/service-2.png" alt="Service icon" />
                    </div>

                    <h3 class="h3 card-title">
                        <a href="#">Rent a home</a>
                    </h3>

                    <p class="card-text">
                        over 1 million+ homes for sale available on the website, we
                        can match you with a house you will want to call home.
                    </p>

                    <a href="#" class="card-link">
                        <span>Find A Home</span>

                        <IoIosArrowRoundForward />
                    </a>
                    </div>
                </li>

                <li>
                    <div class="service-card">
                    <div class="card-icon">
                        <img src="/src/assets/service-3.png" alt="Service icon" />
                    </div>

                    <h3 class="h3 card-title">
                        <a href="#">Sell a home</a>
                    </h3>

                    <p class="card-text">
                        over 1 million+ homes for sale available on the website, we
                        can match you with a house you will want to call home.
                    </p>

                    <a href="#" class="card-link">
                        <span>Find A Home</span>

                        <IoIosArrowRoundForward />
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            </section>

        </div>
    )
}

export default Services