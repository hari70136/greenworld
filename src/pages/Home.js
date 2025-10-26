import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Green World</title>
        <meta
          name="description"
          content="Eco-Smart Septic Solutions for a Cleaner Tomorrow. Andhra Pradesh’s first non-fillable bio septic tank system — Fix It! Forget It!"
        />
      </Helmet>

      {/* Overlay for readability */}
      <div className="home-logo-section">
  <img src="/logo.png" alt="Green World Home Logo" className="home-logo" />

        {/* 🌏 Headline Section */}
        <header className="hero-section">
          <h1>Eco-Smart Septic Solutions for a Cleaner Tomorrow</h1>
          <h2>Andhra Pradesh’s first non-fillable bio septic tank system — “Fix It! Forget It!”</h2>

          {/* ✅ Call to Action */}
          <div className="cta-buttons">
            <a
              href="https://wa.me/916301011077"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </header>

        {/* 💬 Testimonials */}
        <section className="testimonials">
          <h3>What Our Customers Say</h3>
          <blockquote>
            <h2>Check it Out! Gallery, About, Models, Contact Us</h2>
            “Installed once, and it’s been working perfectly — no smell, no maintenance!”
            <br />
            <strong>We also provide eco-friendly liquid for tank maintenance.</strong>
          </blockquote>
          <blockquote>
            “Green World’s tanks are truly eco-friendly — we saved water and avoided manual cleaning.”
          </blockquote>
        </section>

        {/* 🎥 Video Section */}
        <section className="video-section">
          <h3>Watch Our Bio Septic System in Action</h3>
          <video
            controls
            width="100%"
            style={{ maxWidth: '700px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
          >
            <source src="/tank-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* 🌍 About Section */}
        <section className="about-snippet">
          <h3>About Green World</h3>
           <li><strong>Innovation:</strong> Advanced bio-digestion technology for clean sanitation.</li>
        <li><strong>Sustainability:</strong> Protecting water sources and reducing environmental waste.</li>
        <li><strong>Quality:</strong> Durable RCC tanks with lifetime reliability.</li>
        <li><strong>Service:</strong> Customer satisfaction through eco-smart solutions.</li>
          <p>
            We provide non-fillable bio septic tanks that convert waste into reusable water. Our mission is to eliminate manual cleaning, water contamination, and environmental pollution
            in households, industries, and institutions.
          Odour — no pumping, no pollution, and no hassle.
          </p>
          <p><strong>Phone:</strong> +91 6301011077</p>
      <p><strong>Email:</strong> greenworld70136@gmail.com</p>
      <p><strong>Address:</strong> Patha Palluru Village, Agraharam Post, Puttur Mandal, Tirupati District, Andhra Pradesh</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
