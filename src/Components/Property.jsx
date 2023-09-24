import React from 'react'
import {IoLocationOutline} from "react-icons/io5";
import {BsCamera,BsSlashSquare} from "react-icons/bs";
import {HiOutlineFilm} from "react-icons/hi";
import { BiBed } from 'react-icons/bi';
import { IoManOutline,IoAddCircleOutline,IoResize } from 'react-icons/io5';
import {AiOutlineHeart} from "react-icons/ai";
import { author, property1, property2, property3, property4 } from '../assets';
function Property() {
    return (
        <div>
               <section className="property" id="property">
          <div className="container">
            <p className="section-subtitle">Properties</p>

            <h2 className="h2 section-title">Featured Listings</h2>

            <ul className="property-list has-scrollbar">
              <li>
                <div className="property-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={property1}
                        alt="New Apartment Nice View"
                        className="w-100"
                      />
                    </a>

                    <div className="card-badge green">For Rent</div>

                    <div className="banner-actions">
                      <button className="banner-actions-btn">
                       <IoLocationOutline />

                        <address>Blue Area, Islamabad</address>
                      </button>

                      <button className="banner-actions-btn">
                        <BsCamera />

                        <span>4</span>
                      </button>

                      <button className="banner-actions-btn">
                      <HiOutlineFilm />


                        <span>2</span>
                      </button>
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-price"><strong>34,900Pkr</strong>/Month</div>

                    <h3 className="h3 card-title">
                      <a href="#">New Apartment Nice View</a>
                    </h3>

                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                      Renovated With New Wood
                    </p>

                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>

                        <BiBed />

                        <span>Bedrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>2</strong>

                        <IoManOutline />

                        <span>Bathrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>3450</strong>

                        <BsSlashSquare />

                        <span>Square Ft</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src={author}
                          alt="William Seklo"
                          className="w-100"
                        />
                      </figure>

                      <div>
                        <p className="author-name">
                          <a href="#">John Doe</a>
                        </p>

                        <p className="author-title">Estate Agents</p>
                      </div>
                    </div>

                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                        <IoResize />
                      </button>

                      <button className="card-footer-actions-btn">
                      <AiOutlineHeart />
                      </button>

                      <button className="card-footer-actions-btn">
                      <IoAddCircleOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="property-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={property2}
                        alt="Modern Apartments"
                        className="w-100"
                      />
                    </a>

                    <div className="card-badge orange">For Sales</div>

                    <div className="banner-actions">
                      <button className="banner-actions-btn">
                        <IoLocationOutline />

                        <address>Blue Area, Islamabad</address>
                      </button>

                      <button className="banner-actions-btn">
                      <BsCamera />

                        <span>4</span>
                      </button>

                      <button className="banner-actions-btn">
                      <HiOutlineFilm />


                        <span>2</span>
                      </button>
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-price"><strong>$34,900</strong>/Month</div>

                    <h3 className="h3 card-title">
                      <a href="#">Modern Apartments</a>
                    </h3>

                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                      Renovated With New Wood
                    </p>

                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>

                        <BiBed />

                        <span>Bedrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>2</strong>

                       <IoManOutline />

                        <span>Bathrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>3450</strong>

                        <BsSlashSquare />

                        <span>Square Ft</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src={author}
                          alt="William Seklo"
                          className="w-100"
                        />
                      </figure>

                      <div>
                        <p className="author-name">
                          <a href="#">William Seklo</a>
                        </p>

                        <p className="author-title">Estate Agents</p>
                      </div>
                    </div>

                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                      <IoResize />
                      </button>

                      <button className="card-footer-actions-btn">
                      <AiOutlineHeart />
                      </button>

                      <button className="card-footer-actions-btn">
                        <IoAddCircleOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="property-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={property3}
                        alt="Comfortable Apartment"
                        className="w-100"
                      />
                    </a>

                    <div className="card-badge green">For Rent</div>

                    <div className="banner-actions">
                      <button className="banner-actions-btn">
                        <IoLocationOutline />

                        <address>Blue Area, Islamabad</address>
                      </button>

                      <button className="banner-actions-btn">
                      <BsCamera />

                        <span>4</span>
                      </button>

                      <button className="banner-actions-btn">
                       <HiOutlineFilm />

                        <span>2</span>
                      </button>
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-price"><strong>$34,900</strong>/Month</div>

                    <h3 className="h3 card-title">
                      <a href="#">Comfortable Apartment</a>
                    </h3>

                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                      Renovated With New Wood
                    </p>

                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>

                        <BiBed />

                        <span>Bedrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>2</strong>

                        <IoManOutline />

                        <span>Bathrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>3450</strong>

                        <BsSlashSquare />

                        <span>Square Ft</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src={author}
                          alt="William Seklo"
                          className="w-100"
                        />
                      </figure>

                      <div>
                        <p className="author-name">
                          <a href="#">William Seklo</a>
                        </p>

                        <p className="author-title">Estate Agents</p>
                      </div>
                    </div>

                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                      <IoResize />
                      </button>

                      <button className="card-footer-actions-btn">
                        <AiOutlineHeart />
                      </button>

                      <button className="card-footer-actions-btn">
                        <IoAddCircleOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="property-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={property4}
                        alt="Luxury villa in Rego Park"
                        className="w-100"
                      />
                    </a>

                    <div className="card-badge green">For Rent</div>

                    <div className="banner-actions">
                      <button className="banner-actions-btn">
                      <IoLocationOutline />

                        <address>Belmont Gardens, Chicago</address>
                      </button>

                      <button className="banner-actions-btn">
                      <BsCamera />

                        <span>4</span>
                      </button>

                      <button className="banner-actions-btn">
                        <HiOutlineFilm />

                        <span>2</span>
                      </button>
                    </div>
                  </figure>

                  <div className="card-content">
                    <div className="card-price"><strong>$34,900</strong>/Month</div>

                    <h3 className="h3 card-title">
                      <a href="#">Luxury villa in Rego Park</a>
                    </h3>

                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                      Renovated With New Wood
                    </p>

                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>

                        <BiBed />

                        <span>Bedrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>2</strong>

                        <IoManOutline />

                        <span>Bathrooms</span>
                      </li>

                      <li className="card-item">
                        <strong>3450</strong>

                        <BsSlashSquare />

                        <span>Square Ft</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src={author}
                          alt="William Seklo"
                          className="w-100"
                        />
                      </figure>

                      <div>
                        <p className="author-name">
                          <a href="#">William Seklo</a>
                        </p>

                        <p className="author-title">Estate Agents</p>
                      </div>
                    </div>

                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                      <IoResize />
                      </button>

                      <button className="card-footer-actions-btn">
                      <AiOutlineHeart />
                      </button>

                      <button className="card-footer-actions-btn">
                      <IoAddCircleOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
            </section>
        </div>
    )
}

export default Property