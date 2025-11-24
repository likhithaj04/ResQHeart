import React from 'react';
import './Review.css';

export default function Review({ images }) {
  return (
    <section className="review-section">
      <div className="review-container">
        <div className="image-column">
          <div className="image-wrapper">
      <img src={images[0]} alt="Adopter with Pet" />
      <div className="quote-card">
        <p>“Until one has loved an animal a part of one’s soul remains unawakened.”</p>
        <h5>Anatole France</h5>
      </div>
    </div>
        </div>

        <div className="text-column">
          <h5 className="subtitle">Fun Fact Must You Know</h5>
          <h2>You Have The Power To Change Tomorrow</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.
          </p>
          <div className="facts">
            <div className="fact-item">
              <div className="circle">95%</div>
              <h5>Successful Rescue</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sedo.</p>
            </div>
            <div className="fact-item">
              <div className="circle">82%</div>
              <h5>Expert Volunteer</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sedo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
