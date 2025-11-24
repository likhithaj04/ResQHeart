import React, { useEffect, useState } from 'react';
import './Hero.css';

// Import your background images
import  bg1 from '../../assets/Hero/hero1.jpg';
import  bg2 from '../../assets/Hero/hero2.jpg';
import  bg3 from '../../assets/Hero/hero3.jpg';
import  bg4 from '../../assets/Hero/hero4.jpg';



export default function About() {
  const images = [bg1, bg2, bg3,bg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="about-hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay1" />
      <div className="about-content" style={{color:"white"}}>
        <h1>About ResQHeart</h1>
        <p>
          ResQHeart is a community-driven platform dedicated to rescuing stray animals,
          spreading awareness, supporting shelter homes, and connecting kind-hearted adopters
          with their future companions.
        </p>
      </div>
    </div>
  );
}
