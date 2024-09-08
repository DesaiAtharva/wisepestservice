import React, { useState } from 'react';
import '../components/style/Header.css';
import Logo from '../Assets/logo.jpg';
import certi from '../Assets/IMG-20240901-WA0000~3.jpg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+91 8169667495';
    const message = 'Hello, I would like to book an appointment for pest control!';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Wise Pest Control" />
        <div ><h1>Wise Pest Control Services</h1>
        {/* Adding the line below the header */}
        <p className="license-text" style={{textSize:'10px'}}>Govt. Approved & Authorised License NO. LAID1339</p></div>
        <img style={{borderRadius:'100%'}} src={certi}/>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#why" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Our Services</a></li>
        <li><button onClick={handleWhatsAppClick} className="whatsapp-btn">Book Appointment</button></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
