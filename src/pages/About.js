import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Green World Bio Septic Tank</h2>
      <p>
        Green World Bio Septic Tank is a leading innovator in sustainable sanitation solutions, proudly introducing Andhra Pradesh’s first Non-Fillable Bio Septic Tank System.
      </p>
      <p>
        Our advanced RCC Bio-Hydro Digester Tanks naturally treat waste without manual cleaning, pumping, or maintenance. Using a three-stage bio-processing system, we convert waste into reusable water and harmless gases — ensuring zero pollution and complete environmental protection.
      </p>
      <p>
        We serve homes, apartments, factories, hospitals, schools, colleges, and offices with long-lasting, eco-friendly solutions.
      </p>

      <h3>Our Motto</h3>
      <p><strong>“Fix It! Forget It!”</strong> – Once installed, our system manages waste efficiently for years, saving water, effort, and the environment.</p>

      <h3>Our Core Values</h3>
      <ul className="core-values">
        <li><strong>Innovation:</strong> Advanced bio-digestion technology for clean sanitation.</li>
        <li><strong>Sustainability:</strong> Protecting water sources and reducing environmental waste.</li>
        <li><strong>Quality:</strong> Durable RCC tanks with lifetime reliability.</li>
        <li><strong>Service:</strong> Customer satisfaction through eco-smart solutions.</li>
      </ul>

      <h3>Mission</h3>
      <p>
        To provide innovative, non-fillable bio septic tanks that convert waste into reusable water and clean energy safely and naturally. To eliminate manual cleaning, water contamination, and environmental pollution in households, industries, and institutions.
      </p>
      <section className="video-section">
  <h3>Watch Our Bio Septic System in Action</h3>
  <video controls width="100%" style={{ maxWidth: '700px', borderRadius: '12px' }}>
    <source src="/tank-demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>
<section className="timeline-section">
  <h3>Our Journey</h3>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-year">2022</div>
      <div className="timeline-content">
        <h4>Green World Founded</h4>
        <p>We began with a mission to bring eco-smart sanitation to rural Andhra Pradesh.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-year">2023</div>
      <div className="timeline-content">
        <h4>First 100 Installations</h4>
        <p>Installed our first 100 bio septic tanks across schools, homes, and farms.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-year">2024</div>
      <div className="timeline-content">
        <h4>Expanded to 3 Districts</h4>
        <p>Served customers in Tirupati, Chittoor, and Nellore with zero-maintenance tank systems.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-year">2025</div>
      <div className="timeline-content">
        <h4>Launched Our Website</h4>
        <p>Went live with greenworldbio.netlify.app to reach more eco-conscious customers online.</p>
      </div>
    </div>
  </div>
</section>



      <h3>Vision</h3>
      <p>
        “To create a cleaner, greener, and sustainable future by revolutionizing sanitation through eco-friendly, maintenance-free bio septic solutions that protect groundwater, promote hygiene, and preserve our planet for generations to come.”
      </p>

      <h3>Contact</h3>
      <p><strong>Phone:</strong> +91 6301011077</p>
      <p><strong>Email:</strong> greenworld70136@gmail.com</p>
      <p><strong>Address:</strong> Patha Palluru Village, Agraharam Post, Puttur Mandal, Tirupati District, Andhra Pradesh</p>
    </div>
  );
}

export default About;
