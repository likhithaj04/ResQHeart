import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './Message.css'

export default function Message() {
   let [contacts,setContacts]=useState([])
   
   useEffect(()=>{
       axios.get(`${REACT_APP_API_URL}/contact`)
       .then(res=>{
        setContacts(res.data.contacts)
       }).catch(err=>{
        console.log("err",err)
       })
   },[])


  return (
  
  <div className="admin-dashboard ">
  <Sidebar />
  <div className="table-responsive ms-4">
    <table className="table table-bordered table-striped table-hover large-table mt-5">
      <thead className="table-dark">
        <tr>
          <th scope="col">Serial</th>
          <th scope="col">Username</th>
          <th scope="col">Message</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <tr key={contact._id}>
              <th scope="row">{index + 1}</th>
              <td>{contact.username}</td>
              <td>{contact.message}</td>
              <td>{contact.email}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No messages found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>



  )
}
