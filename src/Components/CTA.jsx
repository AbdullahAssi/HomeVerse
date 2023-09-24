import React from 'react'

import { IoArrowForwardOutline } from 'react-icons/io5'

function CTA() {
    return (
        <div>
            <section className="cta">
            <div className="container">
                <div className="cta-card">
                <div className="card-content">
                    <h2 className="h2 card-title">Looking for a dream home?</h2>

                    <p className="card-text">
                    We can help you realize your dream of a new home
                    </p>
                </div>

                <button className="btn cta-btn">
                    <span>Explore Properties</span>

                    <IoArrowForwardOutline />
                </button>
                </div>
            </div>
            </section>
        </div>
    )
}

export default CTA