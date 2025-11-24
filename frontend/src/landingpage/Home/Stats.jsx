import React from 'react';

export default function Stats() {
  return (
    <div
      className="stats-section"
      style={{
        backgroundImage: "url('./src/assets/stats.png')",
        backgroundColor:"rgb(228, 192, 148)",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px',
        width: '100%',
      }}
    ></div>
  );
}
