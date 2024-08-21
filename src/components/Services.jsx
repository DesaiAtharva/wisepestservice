// import React from 'react';

// const services = [
//   { title: 'General Pest Control', description: '100% general pest removal.' },
//   { title: 'Herbal Pest Control', description: 'Herbal pest control with safe products.' },
//   { title: 'Cockroach Pest Control', description: 'Complete cockroach removal.' },
//   { title: 'Termites Pest Control', description: 'Effective termite removal.' },
//   // Add more services here as in the image
// ];

// const Services = () => {
//   return (
//     <section className="services">
//       <h2>What We Offer?</h2>
//       <div className="service-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from "react";
// import "../components/style/T1.css"; // Create a CSS file to style your page
// import bedbugImg from '../Assets/bedbug.jpg';

// const Services = () => {
//   const handleWhatsAppClick = () => {
//     const phoneNumber = "+91 77383 05484"; // Replace with your actual WhatsApp number
//     const message = "Hello, I would like to inquire about your pest control services.";
//     const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
//     window.location.href = url;
//   };

//   // const handleCallClick = () => {
//   //   window.location.href = "tel:+91 77383 05484"; // Directs to phone call
//   // };

//   return (
//     <div className="landing-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Wise Pest Control Services</h1>
//           <p>Villa | Apartment | Flat | Bungalow</p>

//           {/* Pest Control Icons */}
//           <div className="pest-icons">
//           <img src={`${process.env.PUBLIC_URL}/Assets/bedbug.jpg`} alt="Bedbug" />
//             <img src="termite.png" alt="Termite" />
//             <img src="cockroach.png" alt="Cockroach" />
//             <img src="rat.png" alt="Rat" />
//             <img src="mosquito.png" alt="Mosquito" />
//           </div>

//           {/* Contact Information */}
//           <h2>Wise Pest Control Services</h2>
//           <p className="contact-numbers">+91 77383 05484</p>

//           <button className="contact-btn" onClick={handleWhatsAppClick}>
//             Contact us Now!
//           </button>
//         </div>
//       </section>

//       {/* Footer Section with Promotion */}
//       <footer className="promo-section">
//   <div className="scrolling-text">
//     <p>FLAT 15% OFF!! ON ALL PEST CONTROL ANNUAL CONTRACTS (Toll Free) +91 77383 05484</p>
//   </div>
// </footer>
//     </div>
//   );
// };

// export default Services;



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
          <p>Villa | Apartment | Flat | Bungalow</p>

          {/* Pest Control Icons */}
          <div className="pest-icons">
            <img src={bedbugImg} alt="Bedbug" />
            <img src={termiteImg} alt="Termite" />
            <img src={cockroachImg} alt="Cockroach" />
            <img src={ratImg} alt="Rat" />
            <img src={mosquitoImg} alt="Mosquito" />
          </div>

          {/* Contact Information */}
          <h2>Wise Pest Control Services</h2>
          <p className="contact-numbers">+91 77383 05484</p>

          <button className="contact-btn" onClick={handleCallClick}>
            Contact us Now!
          </button>
        </div>
      </section>

      {/* Footer Section with Promotion */}
      <footer className="promo-section">
        <div className="scrolling-text">
          <p>FLAT 15% OFF!! ON ALL PEST CONTROL ANNUAL CONTRACTS (Toll Free) +91 77383 05484</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;