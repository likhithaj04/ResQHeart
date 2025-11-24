import React from 'react';
import Hero from './Hero';
import PetList from './PetList';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <div
          className="wave-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Comic Sans MS",
            fontWeight: "500",
            fontSize: "22px",
            marginTop: "-5rem"
          }}
        >
          <br />
          <h2>Meet Our Adorable Friends</h2><br />
          <p>
            Each paw has a story. These rescued animals are waiting for a loving home
            and a second chance at life. Explore their profiles and be the reason they
            wag their tails again.
          </p><br />
        </div>

        {/* ✅ PetList handles fetching + rendering */}
        <PetList  />
      </div>
    </>
  );
}
