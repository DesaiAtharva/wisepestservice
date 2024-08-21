import React from 'react';
import "../components/style/T2.css"; // Assuming you'll create this CSS file
import p1 from "../Assets/p1.jpg";
// import p2 from "../Assets/p2.png"; // Replace with the correct image path
import p3 from "../Assets/p3.jpeg"; // Replace with the correct image path
import p4 from "../Assets/p4.png"; // Replace with the correct image path
import p5 from "../Assets/p5.jpeg"; // Replace with the correct image path
import p6 from "../Assets/p6.jpeg"; // Replace with the correct image path
import p7 from "../Assets/p7.jpeg"; // Replace with the correct image path
import p8 from "../Assets/p8.jpeg"; // Replace with the correct image path
import p9 from "../Assets/p9.jpeg"; // Replace with the correct image path
import p10 from "../Assets/p10.jpeg"; // Replace with the correct image path
import p11 from "../Assets/p11.jpg"; // Replace with the correct image path
import p12 from "../Assets/p12.png"; // Replace with the correct image path

const services = [
  { title: 'General Pest Control', description: 'General pest control removal service. ', icon: p1 },
  
  { title: 'Cockroach Pest Control', description: 'Cockroach pest control removal service.', icon: p3 },
  { title: 'Termites Pest Control', description: 'Termites pest control removal service. ', icon: p4 },
  { title: 'Bed Bugs Pest Control', description: 'Bed bugs pest control removal service. ', icon: p5 },
  { title: 'Rodent(Rat) Pest Control', description: 'Rodent(Rat) pest control removal service.', icon: p6 },
  { title: 'Ticks Pest Control', description: 'Ticks pest control removal service.', icon: p7 },
  { title: 'Ants Pest Control', description: 'Ants pest control services. ', icon: p8 },
  { title: 'Bird Control', description: 'Bird pest control removal service.', icon: p9 },
  { title: 'Wood Borer Control', description: 'Wood borer pest control removal service.', icon: p10 },
  { title: 'Mosquito Control', description: 'Mosquito control services.', icon: p11 },
  { title: 'Lizard Control', description: ' Lizard pest control services.', icon: p12 }
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