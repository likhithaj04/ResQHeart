import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from "react-toastify"

import axios from 'axios'
import './Info.css'
export default function Info() {
  const {id}=useParams()
 let [info,setInfo]= useState({})

  useEffect(()=>{
  axios.get(`http://localhost:8080/petdata/${id}`)
  .then(res=>{
    setInfo(res.data)
  }).catch(err=>{
    console.log(err)
  })
  },[id])

 const navigate=useNavigate();

  const navigation = async () => {
    try {
      await axios.get("http://localhost:8080/adopt/form", { withCredentials: true });
   navigate(`/form/${id}`)
    } catch (err) {
      // alert("Login to continue")
      toast.error("Login to continue")
      navigate("/login");
      
    }
  };


return (
  <>
  {/* <div className="containerss "> */}
    <div className="row justify-content-center">
      <div className="col-md-5 mt-5">
        <div className="card shadow p-4 mt-5" style={{borderRadius:"4rem"}}>
          <h1 className="mb-4 text-center">🐾 Pet Details</h1>
          <h2 className="mb-3 text-center">{info.petname}</h2>

          {info.image && (
            <img
              src={info.image.url}
              alt={info.petname}
              className="img-fluid rounded mx-auto d-block mb-4"
              style={{ maxWidth: "480px" }}
            />
          )}
           <p><strong>Age:</strong> {info.age}</p>
          <p><strong>breed:</strong> {info.breed}</p>
          <p><strong>Nature:</strong> {info.nature}</p>
          <p><strong>Medical History:</strong> {info.medical}</p>
          <p><strong>Shelter Name</strong> {info.shelter}</p>

          <p><strong>Address:</strong> {info.address}</p>
          <p><strong>More Info:</strong> {info.information}</p>

          <div className="text-center">
            <button
              className="btn btn-primary mt-4"
              onClick={navigation}
            >
               Adopt This Pet
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="my-5">
  <h3 className="text-center mb-4">Why Adopt With Us</h3>
  <div className="row justify-content-center">
    <div className="col-md-4 mb-3">
      <div className="adopt-card">
        <h5>💉 Fully Vaccinated</h5>
        <p>All our pets receive proper vaccinations to ensure they are healthy and safe for your family.</p>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="adopt-card">
        <h5>🏥 Health Checked</h5>
        <p>Each pet undergoes a full medical check-up and is cared for by trusted vets before adoption.</p>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="adopt-card">
        <h5>❤️ Loving Shelters</h5>
        <p>Our rescue shelters provide a safe and loving environment until your new companion finds a forever home.</p>
      </div>
    </div>
  </div>
</div>

  {/* </div> */}
  
  </>
);


}

