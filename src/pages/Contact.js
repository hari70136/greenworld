import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’re here to help you choose the right eco-smart septic solution for your needs.</p>

      <div className="contact-details">
        <p><strong>📞 Phone:</strong></p>
<ul className="phone-list">
  <li><a href="tel:+916301011077">+91 63010 11077</a></li>
  <li><a href="tel:+917013627724">+91 70136 27724</a></li>
</ul>

  <p><strong>📧 Email:</strong></p>
<ul className="email-list">
  <li>
    <a
      href="mailto:greenworld70136@gmail.com?subject=Inquiry%20about%20Bio%20Septic%20Tank&body=Hello%20Green%20World%2C%0A%0AI%20am%20interested%20in%20your%20eco-friendly%20septic%20solutions.%20Please%20share%20more%20details.%0A%0AThank%20you!"
    >
      greenworld70136@gmail.com
    </a>
  </li>
</ul>


        <p><strong>📍 Address:</strong> Patha Palluru Village, Agraharam Post, Puttur Mandal, Tirupati District, Andhra Pradesh</p>
        <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/916301011077" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
      </div>
    </div>
  );
}

export default Contact;
