import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'

export default function AdoptFormData() {
    let[adoptions,setAdoptions]=useState([]);

   useEffect(()=>{
    axios.get("http://localhost:8080/adopt/form",{withCredentials:true})
    .then(res=>{
      console.log(res.data)
        setAdoptions(res.data.adoptions)
    }).catch(err => {
    console.error(err);
  });
   },[])

  const handleApprove=async(id)=>{
    try{
      await axios.post(`${REACT_APP_API_URL}/adopt/decision/${id}/approve`,{},{withCredentials:true});

      const updatedAdoptions=adoptions.mao((adopt)=>{
        if(adopt._id===id){
          return{...adopt,status:'Approved'}
        }
        else{
          return adopt
        }
      });
      setAdoptions(updatedAdoptions);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
        <div className='admin-dashboard'>
  <Sidebar />
  
  <table className="table table-bordered ms-4 mt-5" style={{ fontSize: '15px', width: '100%',height:"120px" }}>
    <thead className="table-dark">
      <tr>
        <th>Full Name</th>
        <th>Pet Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Address</th>
        <th>Gender</th>
        <th>Experience</th>
        <th>Live With</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {adoptions.map((adopt) => (
        <tr key={adopt._id}>
          <td>{adopt.fullname}</td>
          <td>{adopt.petname}</td>
          <td>{adopt.email || adopt.user?.email}</td>
          <td>{adopt.mobile}</td>
          <td>{adopt.address}</td>
          <td>{adopt.gender}</td>
          <td>{adopt.experience}</td>
          <td>{adopt.livewith}</td>
          <td>
            <span className={`badge ${
              adopt.status === 'Approved'
                ? 'bg-success'
                : adopt.status === 'Rejected'
                ? 'bg-danger'
                : 'bg-secondary'
            }`}>
              {adopt.status}
            </span>
          </td>
          <td>
            <button
              className="btn btn-success btn-sm me-2"
              disabled={adopt.status === 'Approved'}
              onClick={() => handleApprove(adopt._id)}
            >
              Approve
            </button>
            <button
              className="btn btn-danger btn-sm"
              disabled={adopt.status === 'Rejected'}
              onClick={() => handleReject(adopt._id)}
            >
              Disapprove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  )
}
