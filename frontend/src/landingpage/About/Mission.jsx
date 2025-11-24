import React from 'react';
import './Mission.css';
import { FaBullseye, FaRocket } from 'react-icons/fa';

export default function Mission() {
  return (
    <div className="about-mission-section">
      <div className="mission-text">
        <p className="subtitle">OUR MISSION</p>
        <h1>
          Together, let’s create a kinder world<br />for stray and rescued animals
        </h1>
        <p className="description">
          We work to rescue, rehabilitate, and rehome animals in need. Through awareness and support,
          we aim to reduce the number of strays suffering on streets and provide them with the
          dignity and love they deserve.
        </p>
      </div>

      <div className="cards-container">
        <div className="mission-card vision">
          <FaBullseye className="icon" />
          <div>
            <h4>Our Vision</h4>
            <p>
              A world where every animal is respected, protected, and cared for—free from abuse or abandonment.
            </p>
          </div>
        </div>

        <div className="mission-card goal">
          <FaRocket className="icon" />
          <div>
            <h4>Our Goal</h4>
            <p>
              To increase adoptions, promote sterilization, and reduce street suffering through collaborative efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
