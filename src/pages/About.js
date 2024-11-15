import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaBrain } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="page about">
      <Navbar />

      <section className="about-info">
        <h1>About Me</h1>
        <p>I’m <strong>Hina Salman</strong>, an IT student focusing on the latest technologies, including Artificial Intelligence, Web 3.0, and Metaverse development.</p>
        <p>I specialize in HTML, CSS, JavaScript, and TypeScript and I’m passionate about building innovative solutions with these technologies.</p>
      </section>
              <section className="skills-list">
            <h2>My Technical Skills</h2>
            <ul>
            <li>
            <FaHtml5 style={{ color: '#E34F26', fontSize: '24px', marginRight: '10px' }} /> HTML
          </li>
          <li>
            <FaCss3Alt style={{ color: '#1572B6', fontSize: '24px', marginRight: '10px' }} /> CSS
          </li>
          <li>
            <FaJsSquare style={{ color: '#F7DF1E', fontSize: '24px', marginRight: '10px' }} /> JavaScript
          </li>
          <li>
            <FaReact style={{ color: '#61DAFB', fontSize: '24px', marginRight: '10px' }} /> React
          </li>
          <li>
            <FaVuejs style={{ color: '#42b883', fontSize: '24px', marginRight: '10px' }} /> Vue.js
          </li>
          <li>
            <FaBrain style={{ color: '#00A9B6', fontSize: '24px', marginRight: '10px' }} /> Artificial Intelligence & Machine Learning
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default About;


