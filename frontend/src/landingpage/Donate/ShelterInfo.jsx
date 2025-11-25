import React from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

import axios from 'axios';
import './ShelterInfo.css'

export default function ShelterInfo() {
  const { id } = useParams(); 
  const [shelter, setShelter] = useState(null);
  const navigate=useNavigate();

const mainImage = shelter?.gallery?.[0];
const secondImage = shelter?.gallery?.[1];
const remainingImages = shelter?.gallery?.slice(2) || [];
    
const navigation = async () => {
  // try {
  //   const res = await axios.get("http://localhost:8080/api/me", { withCredentials: true });
  //   if (res.data.success) {
      navigate(`/donation/${id}`); // user is logged in
}


    useEffect(() => {
    const fetchShelter = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/shelter/${id}`, {
          withCredentials: true,
        });
        setShelter(res.data.shelter);
      } catch (err) {
        console.error(err);
      }
    };

    fetchShelter();
  }, [id])

  if (!shelter) return <p>Loading...</p>;

  return (
    <>
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 ">
            <button className='btn btn mb-5' onClick={navigation}>Donate to {shelter.shelterName}</button>
          <p className="text-uppercase text-warning fw-semibold mb-2">Pawsitive Impact</p>
          <h1 className="display-5 fw-bold mb-4">{shelter.shelterName}</h1>
          <p className="lead text-muted">{shelter.summary}</p>
          <p className="text-secondary">
            Address: {shelter.address} <br />
            Established: {shelter.establishedIn} <br />
            Contact: {shelter.contactNumber} | {shelter.email}
          </p>
        </div>
        <div className="mains col-md-6">
          <img
            src={mainImage?.url || '/placeholder.jpg'}
            alt="Main Shelter"
            className=" allimg img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row align-items-center mb-5" style={{padding:"2rem"}}>
        <div className="col-md-6 mb-4 mb-md-0" >
          <img
            src={secondImage?.url || '/placeholder.jpg'}
            alt="Second Shelter"
            className="allimg img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Our Mission & Impact</h3>
          <p className="text-muted mb-3">
            We have saved <strong>{shelter.livesSaved}</strong> lives,
            adopted <strong>{shelter.petsAdopted}</strong> pets,
            and care for <strong>{shelter.petsPresent}</strong> animals today.
          </p>
          <p className="lead text-muted mb-3">{shelter.successStories}</p>
          <p className="text-muted">{shelter.volunteerActivities}</p>
        </div>
      </div>
</div>
<div className="remaining">
      {/* Extra Gallery */}
      {remainingImages.length > 0 && (
        <div>
          <h4 className="fw-bold mb-1">More Moments From Our Shelter</h4>
          <div className="row">
            {remainingImages.map((img, idx) => (
              <div key={idx} className="col-sm-4 col-md-4 mb-4">
                <div className="card shadow-sm h-100">
                  <img
                    src={img.url}
                    alt={`Gallery ${idx + 3}`}
                    className="card-img-top"
                    style={{ height: '250px'}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}
