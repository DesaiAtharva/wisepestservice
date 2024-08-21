import React from 'react';
import "../components/style/T3.css"; // Create this CSS file for styling
import profile from "../Assets/profile.png";

const testimonials = [
  {
    name: 'Bapurao Desai',
    photo: profile, // replace with actual image path
    rating: 5,
    feedback: 'My family really like the services and it is safe and reliable.',
  },
  {
    name: 'Nitin Patil',
    photo:  profile,
    rating: 5,
    feedback: 'We have availed the pest control service from Wise pest Control visited our place, very professional and prompt service given by him. We really got rid of our pest problem after this service.',
  },
  {
    name: 'Sandip Jagtap',
    photo:  profile,
    rating: 5,
    feedback: 'Superb service... Very prompt and responsive... Wise Pest Control is always very supportive and listens to customer problems and advises solutions. Highly recommend!',
  },
  {
    name: 'Sharad Kadam',
    photo:  profile,
    rating: 5,
    feedback: 'I am quite impressed as they came on time and suggested what to do and what not to do. Proper guidance and assurance for the treatment. I would like to use their products in future and suggest my friends too.',
  },
];

const Test = () => {
  return (
    <div className="testimonials-container">
      <h2>Our Happy Clients</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <div className="testimonial-content">
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;