import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Green World</title>
        <meta name="description" content="Eco-Smart Septic Solutions for a Cleaner Tomorrow" />
      </Helmet>
      <div className="overlay">
        {/* Logo */}
        <img src="/logo.jpg" alt="Green World Logo" className="logo" />

        {/* Headline */}
        <header className="hero-section">
          <h1>Eco-Smart Septic Solutions for a Cleaner Tomorrow</h1>
          <h2>Andhra Pradesh’s first non-fillable bio septic tank system — “Fix It! Forget It!”</h2>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="/contact" className="cta-button">Get a Free Consultation</a>
            <a href="https://wa.me/916301011077" className="cta-button" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </header>

        
        <section className="testimonials">
          <h3>What Our Customers Say</h3>
          <blockquote>“Installed once, and it’s been working perfectly. No smell, no maintenance!” 
            "We Provide Liquid For Maintain Tank!"
          </blockquote> 
          <blockquote>“Green World’s tanks are truly eco-friendly. We saved water and avoided manual cleaning.” </blockquote>
        </section>
        <section className="video-section">
  <h3>Watch Our Bio Septic System in Action</h3>
  <video controls width="100%" style={{ maxWidth: '700px', borderRadius: '12px' }}>
    <source src="/tank-demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>


        {/* About Snippet */}
        <section className="about-snippet">
          <h3>About Green World</h3>
          <p>We provide non-fillable bio septic tanks that convert waste into reusable water and clean energy — no pumping, no pollution, no hassle.</p>
          <a href="/about" className="cta-button">Learn More</a>
        </section>
      </div>
    </div>
  );
}

export default Home;
