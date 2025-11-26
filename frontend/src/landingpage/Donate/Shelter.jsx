import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Shelter.css'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Shelter({id, title, address, summary, imageUrl }) {
  const navigate=useNavigate();
    const isAdmin = localStorage.getItem("isAdmin") === "true";

  const navigateTo=()=>{
    navigate(`/shelterInfo/${id}`)
    // console.log(`${id}`)
  }

  const handleDelete=(id)=>{
     axios.delete(`${import.meta.env.VITE_API_URL}/shelter/${id}`).
     then(res=>{
      toast.success("Shelter Deleted");
      
     }).catch(err=>{
        console.log(err)
      })
  }

 return (
  <div
    className="contents card mb-4 shadow"
    style={{
      overflow: "hidden",
      border: "none",
      height: "400px", // 🔹 fixed height for all cards
    }}
  >
    <div className="row g-0 h-100">
      {/* LEFT: Content */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center p-4"
        style={{
          background: "rgba(190, 130, 74, 0.97)",
          color: "black",
          overflow: "hidden",
        }}
      >
        <h4
          className="mb-3"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          <b>{title}</b>
        </h4>
        <p className="mb-2">{address}</p>
        <p className="mb-3 text-truncate">{summary}</p>

        <button className="btn btn" onClick={navigateTo}>
          View To Donate
        </button>
        <br />
        {isAdmin && (
          <button className="btn btn" onClick={() => handleDelete(id)}>
            Delete Shelter
          </button>
        )}
      </div>

      {/* RIGHT: Image */}
      <div className="col-md-6 h-100">
        <img
          src={imageUrl}
          alt={title}
          className="img-fluid h-100 w-100"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
);
}
