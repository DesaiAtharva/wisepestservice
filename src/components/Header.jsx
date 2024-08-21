import React, { useState } from 'react';
import '../components/style/Header.css'; // Use the updated CSS below

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+91 77383 05484'; // Replace with actual WhatsApp number
    const message = 'Hello, I would like to book an appointment for pest control!'; // Customize message
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Wise Pest Control Services</h1> {/* Company Name */}
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Our Services</a></li>
        <li><button onClick={handleWhatsAppClick} className="whatsapp-btn">Book Appointment</button></li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;