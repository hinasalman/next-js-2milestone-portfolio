// src/pages/Home.js
import React from 'react';
import { FaLaptopCode, FaBrain, FaGlobe } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="page home">
      <Navbar />
      
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm <strong>Hina Salman</strong>, an IT student with a focus on Artificial Intelligence and Metaverse.</p>
        <p>Currently studying Artificial Intelligence 3.0 at the Government Sindh, under the mentorship of Kamran Khan Tessori.</p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li><FaLaptopCode /> HTML, CSS, JavaScript, TypeScript</li>
          <li><FaBrain /> Artificial Intelligence & Machine Learning</li>
          <li><FaGlobe /> Web 3.0 & Metaverse</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
