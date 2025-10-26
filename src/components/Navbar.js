
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // ✅ Add this line
import { FaPhoneAlt } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaImages, FaCubes } from 'react-icons/fa';

function Navbar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* 🔷 Top Contact Bar */}
      <div className="top-contact-bar">
        <p>
          <a href="tel:+916301011077">
  <FaPhoneAlt /> +91 63010 11077
</a>
          &nbsp; | &nbsp;
          <a href="mailto:greenworld70136@gmail.com">
            <FaEnvelope /> greenworld70136@gmail.com
          </a>
          &nbsp; | &nbsp;
          <a href="https://www.google.com/maps/place/Patha+pallur/@13.4650501,79.5483804,303m/data=!3m1!1e3!4m6!3m5!1s0x3a4d510058106a8f:0x9522183083b10fbe!8m2!3d13.4651868!4d79.5481071!16s%2Fg%2F11x18fnd7f?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">
            <FaMapMarkerAlt /> Patha Pallur, Puttur Mandal, Tirupathi Dist., Andhra Pradesh
          </a>
        </p>
      </div>
      <a href="https://www.youtube.com/@greenworldBioSepticTank"
  target="_blank"
  rel="noopener noreferrer"
  className="youtube-float"
>
  <FaYoutube />
</a>
{showScrollTop && (
  <button
    className="scroll-top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    ⬆️
  </button>
)}



      {/* 🔷 Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Green World Logo" className="logo-img" />
          </Link>
          <p className="logo-tagline">Founder & Director – C GUNASEKHAR</p>
          <p className="logo-tagline">Eco-Friendly Waste Solutions</p>
          <p className="logo-tagline">Clean Earth, Green Future</p>
        </div>
        <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/gallery">Gallery</Link></li>
  <li><Link to="/models">Models</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>

        

      </nav>
    </div>
  );
}

export default Navbar;
