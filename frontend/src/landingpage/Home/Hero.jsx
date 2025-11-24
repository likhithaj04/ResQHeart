import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/intro/img1.jpg';
import img2 from '../../assets/intro/img2.jpg';
import img3 from '../../assets/intro/img3.jpg';
import img4 from '../../assets/intro/img4.jpg';
import img5 from '../../assets/intro/img5.jpg';
import img6 from '../../assets/intro/img6.jpg';
import img7 from '../../assets/intro/img7.jpg';
import img8 from '../../assets/intro/img8.jpg';


export default function RescueCard() {
  const images = [img1, img2, img3,img4, img5, img6, img7,img8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);   // 1  1+1 = 2 % 7 = 2   // 7 -> 0
    }, 2000); // Changes background every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="about-hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay1" />
      <div className="containers text-white">
        <div>
                <h1 className="display-4 text-center title-animate">ResQHeart</h1>
</div> 
        <div className="row g-4 mt-3">
          <div className="col-auto -5left-margin"></div>
          <div className="card resq-card shadow-lg row-cols-sm-1 g-4 mt-5 me">
            <div className="card-body">
              <h5 className="card-title">Rescue. Heal. Love. 🐾</h5>
              <p className="card-text">
                Every day, countless stray animals struggle to survive without food, shelter, or medical care.
                <br /><br />
                <strong>ResQHeart</strong> is a platform where compassion meets action. Join us in rescuing animals,
                supporting their recovery, and finding them loving forever homes.
              </p>
              <a href="/donate" className="btn donate hover-zoom">Donate Now</a>&nbsp;
              <a href="/volunteer" className="btn donate hover-zoom">Become a Rescuer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
