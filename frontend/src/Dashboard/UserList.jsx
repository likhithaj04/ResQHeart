import React from 'react'
import Sidebar from './Sidebar'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function UserList() {
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/admin/getusers`,{withCredentials:true})
        .then(res=>{
          console.log(res.data)
            setUser(res.data)
        }).catch(err => {
        console.error(err);
      });
       },[])
    
  return (
    <>
            <div className='admin-dashboard'>

    <Sidebar/>
    <div className='user-container' style={{flex:"1"}}>
        <table className="table table-bordered ms-4 mt-5 " style={{ fontSize: '15px', width: '100%',height:"120px"}}>
    <thead className="table-dark">
      <tr>
        <th>UserName</th>
        <th>Email</th>
        <th>PetAdopted(if any)</th>
        <th>BlogPosted(if any)</th>
      </tr>
    </thead>
    <tbody>
      {user.map((users) => (
        <tr key={users._id}>
          <td>{users.username}</td>
          <td>{users.email}</td>
          <td>{users.petCount}</td>
          <td>{users.blogCount}</td>
          </tr>
      ))}
                </tbody>
</table>
    </div>
    </div>
    </>
  )}
