import React from 'react';
import Navbar from '../components/Navbar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <main>{children}</main>
      <a
        href="https://wa.me/916301011077"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp.png" alt="WhatsApp Chat" />
      </a>
    </div>
  );
}

export default Layout;
