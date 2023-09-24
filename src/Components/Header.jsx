import React, { useState } from "react";
import {FaPinterestP ,FaFacebookF} from "react-icons/fa";
import {AiOutlineMail, AiOutlineMenu, AiOutlineCloseCircle, AiOutlineSearch, AiOutlineFacebook, AiOutlineInstagram, AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoTwitter} from "react-icons/bi";
import {MdPersonOutline} from "react-icons/md";
import {CiLocationOn} from "react-icons/ci";
import { logo } from "../assets";


const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    window.addEventListener("scroll", () => {
        const header = document.querySelector("[data-header]");
        if (window.scrollY >= 400) {
        header.classList.add("active");
        } else {
        header.classList.remove("active");
        }
    });

    return (
        <header className={`header ${isNavbarOpen ? "active" : ""}`} data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-top">
            <div className="container">
            {/* Header Top content */}
            <ul className="header-top-list">
                <li>
                <a href="mailto:info@homeverse.com" className="header-top-link">
                    <AiOutlineMail />
                    <span>info@homeverse.com</span>
                </a>
                </li>

                <li>
                <a href="#" className="header-top-link">
                    <CiLocationOn />
                    <address>15/A, I-12, Islamabad</address>
                </a>
                </li>
            </ul>

            <div className="wrapper">
                <ul className="header-top-social-list">
                <li>
                    <a href="#" className="header-top-social-link">
                    <FaFacebookF />
                    </a>
                </li>

                <li>
                    <a href="#" className="header-top-social-link">
                    <BiLogoTwitter />
                    </a>
                </li>

                <li>
                    <a href="#" className="header-top-social-link">
                    <AiOutlineInstagram />
                    </a>
                </li>

                <li>
                    <a href="#" className="header-top-social-link">
                    <FaPinterestP />
                    </a>
                </li>
                </ul>

                <button className="header-top-btn">Add Listing</button>
            </div>
            </div>
        </div>

        <div className="header-bottom">
            <div className="container">
            <a href="#" className="logo">
                <img src={logo} alt="Homeverse logo" />
            </a>

            <nav className={`navbar ${isNavbarOpen ? "active" : ""}`} data-navbar>
                <div className="navbar-top">
                <a href="#" className="logo">
                    <img src={logo} alt="Homeverse logo" />
                </a>

                <button
                    className="nav-close-btn"
                    data-nav-close-btn
                    aria-label="Close Menu"
                    onClick={toggleNavbar}
                >
                    <AiOutlineCloseCircle />
                </button>
                </div>

                <div className="navbar-bottom">
                <ul className="navbar-list">
                    <li>
                    <a href="#home" className="navbar-link" data-nav-link>
                        Home
                    </a>
                    </li>

                    <li>
                    <a href="#about" className="navbar-link" data-nav-link>
                        About
                    </a>
                    </li>

                    <li>
                    <a href="#service" className="navbar-link" data-nav-link>
                        Service
                    </a>
                    </li>

                    <li>
                    <a href="#property" className="navbar-link" data-nav-link>
                        Property
                    </a>
                    </li>

                    <li>
                    <a href="#blog" className="navbar-link" data-nav-link>
                        Blog
                    </a>
                    </li>

                    <li>
                    <a href="#contact" className="navbar-link" data-nav-link>
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </nav>

            <div className="header-bottom-actions">
                <button className="header-bottom-actions-btn" aria-label="Search">
                <div className="icon">
                <AiOutlineSearch />
                </div>
                <span>Search</span>
                </button>

                <button className="header-bottom-actions-btn" aria-label="Profile">
                <div className="icon">
                <MdPersonOutline />
                </div>
                <span>Profile</span>
                </button>

                <button className="header-bottom-actions-btn" aria-label="Cart">
                <div className="icon">
                <AiOutlineShoppingCart />
                </div>
                <span>Cart</span>
                </button>

                <button
                    className="header-bottom-actions-btn"
                    data-nav-open-btn
                    aria-label="Open Menu"
                    onClick={toggleNavbar}
                >
                    <div className="icon">
                <AiOutlineMenu />
                    </div>
                <span>Menu</span>
                </button>
            </div>
            </div>
        </div>
        </header>
    );
};

export default Header;
