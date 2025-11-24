import React from 'react';
import './Aboutpeek.css';

export default function AboutPeek({ images }) {
  return (
    <section className="about-us-section containerss py-5">
     <div className="row align-items-center">
    <div className="col-md-6 about-text">
      <h5 className="section-subtitle">About ResQHeart</h5>
      <h2 className="about-title">
        We’re On A Mission To Be Your Trusted Animal Rescue Partner
      </h2>
      <p className="about-description">
        At <strong>ResQHeart</strong>, we believe every stray deserves a second chance at life.
        From rescue to rehabilitation and forever homes — our journey is driven by compassion, community, and care.
      </p>
          <div className="about-icons">
  <div className="icon-card">
    <i className="fa-solid fa-dog"></i>
    <div>
      <h5>Pet Donations</h5>
      <p>Donate for the shelter home you wish</p>
    </div>
  </div>

  <div className="icon-card">
    <i className="fa-solid fa-hands-helping"></i>
    <div>
      <h5>Volunteer</h5>
      <p>Participate in rescue & adoption drives</p>
    </div>
  </div>

  <div className="icon-card">
    <i className="fa-solid fa-heart-circle-check"></i>
    <div>
      <h5>Adopt</h5>
      <p>Adopt a pet — Love! Heal!</p>
    </div>
  </div>

  <div className="icon-card">
    <i className="fa-solid fa-newspaper"></i>
    <div>
      <h5>Post Stories</h5>
      <p>Share your rescue stories with the world</p>
    </div>
  </div>
</div>


        </div>

        {/* RIGHT GRID */}
      <div className="col-md-6 about-grid">
  <div className="grid-item stat-card dark">
    <h4>Love & Pets</h4>
    <p>Animal Rescue</p>
    <h2>16,789+</h2>
  </div>

 <div className="grid-item image-card tall">
  <img src={images[0]} alt="..." />
</div>

<div className="grid-item image-card short">
  <img src={images[1]} alt="..." />
</div>


  <div className="grid-item stat-card light">
    <h4>Animal Fund</h4>
    <p>Donations</p>
    <h2>11,563+</h2>
  </div>
</div>
      /</div>
    </section>
  );
}
