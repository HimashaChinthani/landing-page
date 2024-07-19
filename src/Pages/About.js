import React from 'react';
import './About.css'; 
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg">
      <div className="about-container">
        <section className="section">
          <h1 className="heading">Welcome to<br/> THE CACTUS OUTLET</h1>
          <p className="text">
            Discover the serene beauty of THE CACTUS OUTLET. Our journey started with a deep fascination for desert plants, driven by a passion to bring the exotic allure of succulents to plant enthusiasts worldwide.
          </p>
          <img src="image.jpg" alt="Succulent Paradise" className="about-image" />
        </section>

        <section className="section">
          <h2 className="subheading">
            <NavLink to="/mission" activeClassName="active">Our Mission</NavLink>
          </h2>
          <p className="text">
            To cultivate a thriving community of succulent lovers by providing exceptional quality cacti and succulents. We aim to inspire a deeper appreciation for desert flora and promote sustainable gardening practices.
          </p>
        </section>

        <section className="section">
          <h2 className="subheading">
            <NavLink to="/vision" activeClassName="active">Our Vision</NavLink>
          </h2>
          <p className="text">
            Our vision is to be the premier destination for unique and rare succulents, known for our commitment to quality, innovation, and customer satisfaction. We envision homes and gardens adorned with resilient and captivating succulents, contributing to a greener and more vibrant world.
          </p>
        </section>

        <section className="section">
          <h2 className="subheading">
            <NavLink to="/OurTeam" activeClassName="active">Meet Our Team</NavLink>
          </h2>
         
            
        </section>

        <section className="section">
          <h2 className="subheading">
            <NavLink to="/ourvalues" activeClassName="active">Our Value</NavLink>
          </h2>
          <ul className="values-list">
            <li className="value">Excellence in Quality</li>
            <li className="value">Passion for Succulents</li>
            <li className="value">Customer-Centric Approach</li>
            {}
          </ul>
        </section>

        <section className="section">
          <h2 className="subheading">
            <NavLink to="/history" activeClassName="active">History</NavLink>
          </h2>
          <p className="text">
          THE CACTUS OUTLET started with a passion for cacti.
          </p>
        </section>

        <section className="section">
          <p className="text">
            <b>Thank you for visiting THE CACTUS OUTLET. Let's create a desert oasis together.</b>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
