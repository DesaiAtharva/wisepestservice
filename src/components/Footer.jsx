import React from 'react';
import '../components/style/Footer.css'; // Create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:Wisepestcontrols@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div className="footer-credits">
        <p>©2024 Wise Pest Control Services, All Right Reserved.  Made with ❤️ by <strong>D Clan</strong></p>
      </div>
    </footer>
  );
};

export default Footer;