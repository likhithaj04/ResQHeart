import React from 'react';
import './Rescue.css';
import { useNavigate } from 'react-router-dom';


export default function Rescue({ images }) {

 const navigate=useNavigate();
 const navigation=()=>{
  navigate("/awareness")
 }

  return (
    <section className="rescue-section">
      <div className="rescue-container">
        {/* LEFT: Images */}
        <div className="rescue-left">
          <div className="rescue-img-grid">
            <img src={images[0]} alt="Happy adoption" className="rescue-img" />
            <img src={images[1]} alt="Dog cage" className="rescue-img" />
            <div className="paw-circle">
              <img src={images[4]} alt="Paw" />
            </div>
            <img src={images[2]} alt="Feeding dog" className="rescue-img" />
            <img src={images[3]} alt="Rescue care" className="rescue-img" />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="content">
          <h1>No shelter. No food. Just hope. <br /> <span className="highlight-text">Be their rescue.</span></h1>
          <p>
            Strays face hunger, harsh weather, and loneliness every day. They survive where love is scarce and danger is constant. Yet, all they ask for is care, warmth, and a second chance.
          </p>
          <p>
            Our commitment to excellence extends beyond basic care to enriching experiences that promote physical, mental, and emotional well-being.
          </p>
          <button className="info-btn" onClick={navigation}>More Info</button>

        </div>
      </div>
    </section>
  );
}
