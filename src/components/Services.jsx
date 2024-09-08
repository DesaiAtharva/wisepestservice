import React from "react";
import "../components/style/T1.css"; // CSS file to style your page
import bedbugImg from "../Assets/bedbug.jpg";
import termiteImg from "../Assets/termite.jpg";
import cockroachImg from "../Assets/cockroach.jpeg";
import ratImg from "../Assets/rat.jpeg";
import mosquitoImg from "../Assets/mosquito.jpg";

const Services = () => {
  const handleCallClick = () => {
    const phoneNumber = "+917738305484"; // Replace with your actual phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Wise Pest Control Services</h1>
          <p className="service-description">
            Protect your House, Apartments, Flats, Bungalows, Offices, Hotels, and Commercial Spaces from pests with our trusted services.
          </p>

          {/* Pest Control Icons with Red Slash */}
          <div className="pest-icons">
            <div className="icon-wrapper">
              <img src={bedbugImg} alt="Bedbug" />
            </div>
            <div className="icon-wrapper">
              <img src={termiteImg} alt="Termite" />
            </div>
            <div className="icon-wrapper">
              <img src={cockroachImg} alt="Cockroach" />
            </div>
            <div className="icon-wrapper">
              <img src={ratImg} alt="Rat" />
            </div>
            <div className="icon-wrapper">
              <img src={mosquitoImg} alt="Mosquito" />
            </div>
          </div>

          {/* Contact Information */}
          <p className="contact-numbers">Call us: +91 8169667495</p>

          <button className="contact-btn" onClick={handleCallClick}>
            Contact Us Now!
          </button>
        </div>
      </section>

      {/* Footer Section with Promotion */}
      <footer className="promo-section">
        <div className="scrolling-text">
          <p style={{color:'white'}}>FLAT 10% OFF!! ON ALL PEST CONTROL ANNUAL CONTRACTS. Call +91 8169667495 Today!</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
