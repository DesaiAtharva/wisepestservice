import React from 'react';
import "../components/style/T2.css"; // Assuming you'll create this CSS file
import p1 from "../Assets/p1.jpg";
// import p2 from "../Assets/p2.png"; // Replace with the correct image path
import p3 from "../Assets/Coc.jpg"; // Replace with the correct image path
import p4 from "../Assets/ter.webp"; // Replace with the correct image path
import p5 from "../Assets/C3.webp"; // Replace with the correct image path
import p6 from "../Assets/C4.jpg"; // Replace with the correct image path
import p7 from "../Assets/Tick.jpg"; // Replace with the correct image path
import p8 from "../Assets/ins.webp"; // Replace with the correct image path
import p9 from "../Assets/C7.webp"; // Replace with the correct image path
import p10 from "../Assets/Woo.webp"; // Replace with the correct image path
import p11 from "../Assets/mos.webp"; // Replace with the correct image path
import p12 from "../Assets/Liz.webp"; // Replace with the correct image path


  const services = [
    { 
      title: 'General Pest Control', 
      description: 'Comprehensive pest control to protect your home from common pests. Fast, safe, and effective solutions!', 
      icon: p1 
    },
    { 
      title: 'Cockroach Control', 
      description: 'Eliminate cockroaches before they invade! Our proven methods keep them away for good.', 
      icon: p3 
    },
    { 
      title: 'Termites Control', 
      description: 'Stop termites from destroying your property! Protect your home with our expert termite control.', 
      icon: p4 
    },
    { 
      title: 'Bed Bugs Control', 
      description: 'Sleep peacefully again. Our specialized bed bug removal gets rid of these pests effectively.', 
      icon: p5 
    },
    { 
      title: 'Mosquito Control', 
      description: 'Enjoy your outdoor spaces without mosquitoes! Our mosquito control ensures a bug-free environment.', 
      icon: p11 
    },
    { 
      title: 'Rodent (Rat) Control', 
      description: 'No more rodents! Keep your property safe from rats and mice with our top-notch control services.', 
      icon: p6 
    },
    { 
      title: 'Ticks Control', 
      description: 'Get rid of ticks quickly and efficiently! Protect your pets and family with our expert services.', 
      icon: p7 
    },
    { 
      title: 'Ants Control', 
      description: 'Say goodbye to ants invading your space. Our ant control solutions are fast and reliable.', 
      icon: p8 
    },
    { 
      title: 'Pigeons Control', 
      description: 'Protect your property from nuisance birds with humane and effective bird control solutions.', 
      icon: p9 
    },
    { 
      title: 'Wood Borer Control', 
      description: 'Guard your wooden structures from borers! Our specialized treatment keeps your wood safe.', 
      icon: p10 
    },
    
    { 
      title: 'Lizard Control', 
      description: 'Keep lizards at bay with our professional lizard control solutions. Safe for your home, tough on pests!', 
      icon: p12 
    }
  ];
  


const Testimonials = () => {
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.icon} alt={service.title} className="service-icon" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {/* <button className="book-service-btn">Book Your Service</button> */}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;