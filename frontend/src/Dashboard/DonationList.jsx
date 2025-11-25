import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useEffect } from 'react'
import axios from 'axios'

export default function DonationList() {
    let [form,setForm]=useState([])
      
    useEffect(()=>{
        axios.get(`${REACT_APP_API_URL}/donate/donationlist`,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setForm(res.data)
        })
        .catch(err=>{
            console.log(err.message)
        });

    },[])

  return (
   <div className="admin-dashboard">
      <Sidebar />
      <table
        className="table table-bordered ms-4"
        style={{ fontSize: "15px", width: "76%",marginTop:"4rem" }}
      >
        <thead className="table-dark">
          <tr>
            <th>Receipt Number</th>
            <th>Donor Name</th>
            <th>Shelter Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
         <tbody>
      {form.map((forms) => (
        <tr key={forms._id}>
          <td>{forms.orderId}</td>
           <td>{forms.name}</td>
                     <td>{forms.shelterName}</td>
          <td>{forms.email || forms.user?.email}</td>
          <td>{forms.phone}</td>
          <td>{forms.amount}</td>
<td>{new Date(forms.createdAt).toLocaleString()}</td>
           </tr>
          ))}
        </tbody>
       </table> 
    </div>
   
  )
}
