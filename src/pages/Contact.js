import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="page contact">
      <Navbar />

      <section className="contact-info">
        <h1>Contact Me</h1>
        <p>If you'd like to get in touch, feel free to reach out via any of the methods below!</p>

        <div className="contact-details">
          <p><FaPhoneAlt /> 03442572627</p>
          <p><FaEnvelope /> <a href="mailto:salman917khan@gmail.com">salman917khan@gmail.com</a></p>
        </div>

        <div className="social-links">
          {/* Updated with icon colors */}
          <a 
            href="https://www.linkedin.com/in/hina-salman-5044762ba" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0077b5', fontSize: '24px', marginRight: '15px' }}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/hinasalman" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#333', fontSize: '24px', marginRight: '15px' }}
          >
            <FaGithub />
          </a>
          <a 
            href="https://youtube.com/c/UC8yYWAPkZt6M8ZqqYAL2ecg" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#FF0000', fontSize: '24px' }}
          >
            <FaYoutube />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
