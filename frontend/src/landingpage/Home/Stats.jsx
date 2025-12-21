import React from 'react';
import statsimg from '../../assets/stats.png'

export default function Stats() {
  return (
    <div
      className="stats-section"
      style={{
       backgroundImage: `url(${statsImg})`,
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
