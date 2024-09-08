import React from "react";
import "../components/Why.css"; // CSS file for styling
import certi from '../Assets/IMG-20240901-WA0000~3.jpg'
import { FaCertificate, FaUmbrella, FaRupeeSign, FaUserTie, FaCog, FaThumbsUp, FaWrench } from "react-icons/fa"; // Import icons from react-icons

const Why = () => {
  const features = [
    { icon: <FaUmbrella />, title: "All Services in Single Umbrella" },
    { icon: <FaRupeeSign />, title: "Free Inspection" },
    { icon: <FaUserTie />, title: "Trusted Experienced Staff" },
    { icon:<FaCertificate />, title: "Pest Control Certified" },
    { icon: <FaThumbsUp />, title: "Premium Quality Service" },
    { icon: <FaWrench />, title: "24/7 Support" },
  ];

  return (
    <div className="why-us-section">
      <h2 className="why-us-heading">WHY Wise Pest Control SERVICES ?</h2>
      <div className="why-us-grid">
        {features.map((feature, index) => (
          <div className="why-us-item" key={index}>
            <div className="why-us-icon">{feature.icon}</div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
