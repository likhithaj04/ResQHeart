import React from 'react';
import './AdoptionSteps.css';
import { useNavigate } from 'react-router-dom';

export default function AdoptionSteps({ images }) {
   const navigate=useNavigate();
 const navigation=()=>{
  navigate("/adopt")
 }

  const steps = [
    {
      title: 'Explore Available Pets and Dogs',
      desc: 'Browse through profiles of our lovable animals.',
    },
    {
      title: 'Meet & Greet with Dogs & Cats',
      desc: 'Schedule a visit to meet the pets you\'re interested in.',
    },
    {
      title: 'Application & Screening',
      desc: 'Complete an adoption application to help us understand.',
    },
    {
      title: 'Finalizing the Adoption',
      desc: 'Once approved, finalize the adoption process.',
    },
  ];

  return (
    <div className="alll">
      <section className="adoption-steps">
        <h1>Your path for saving Lives</h1>
        <p>
          Bringing a furry friend home is a journey of love and care. Here's how you can take the first step in changing a life — and finding a loyal companion for yours.
        </p>
                <button className='adopt-btn' onClick={navigation}>Adopt</button>
        <div className="circle-grid">
          {steps.map((step, index) => (
            <div className="circle-step-box" key={index}>
              <div className="circle-img">
                <img src={images[index]} alt={`Step ${index + 1}`} />
              </div>
              <div className="step-content">
                <h2>{`0${index + 1}`}</h2>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <br></br>
         
      </section>
  
    </div>
  );
}
