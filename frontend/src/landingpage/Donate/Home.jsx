import React, { useEffect, useState } from 'react'
import Shelter from './Shelter'
import axios from 'axios'
import Hero from './Hero'
export default function Home() {

const [shelters,setShelters]=useState([])
 
  useEffect(()=>{
    axios.get(`${REACT_APP_API_URL}/shelter`,{withCredentials:true})
    .then(res=>{
        // console.log("Response:", res.data);

      setShelters(res.data.shelters)
    }).catch(err=>{
      console.log(err)
    });
  },[])
  return (
    <>
    <Hero/>
    <div className="containers">
  <div className="row g-4">
    {shelters.map((shelter, index) => (
      <div className="col-md-6 mb-4" key={index}>
        <Shelter
        key={index}
  id={shelter._id} 
          title={shelter.shelterName}
          address={shelter.address}
          summary={shelter.summary}
          imageUrl={shelter.gallery[0]?.url} // first image
        />
      </div>
    ))}
  </div>
</div>

     </>
  )
}
