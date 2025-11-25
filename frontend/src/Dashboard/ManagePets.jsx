import React from 'react'
import Sidebar from './Sidebar'
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

export default function managePets() {
   
    const [fileData,setFileData]=useState(null)

     const [petData, setPetData] = useState({
    petname: "",
    age:"",
    gender:"",
    breed:"",
    type:"",
    availability:"",
    shelter:"",
    address:"",
    nature:"",
    medical:"",
    information:"",

  });
 
  
  let handleFileChange=(event)=>{
  setFileData(event.target.files[0])
  }
const handleChange = (e) => {
  const { name, value } = e.target;
  setPetData(prev => ({
    ...prev,
    [name]: value
  }));
};
  let handleSubmit=(event)=>{
        event.preventDefault();
          
        const formData=new FormData();

        Object.entries(petData).forEach(([key,value])=>{
          formData.append(key,value)
        })

        formData.append('image',fileData);

       
          axios.post(`${process.env.REACT_APP_API_URL}/petdata`,formData,{
        }).then(res=>{
          console.log("Pet data added",res.data)
          setPetData({
            petname: "",
        age: "",
        gender: "",
        breed: "",
        type: "",
        availability: "",
        shelter: "",
        address: "",
        nature: "",
        medical: "",
        information: ""
          })
          setFileData(null)
          alert("pet added")
        }).catch(err=>{
             console.log(err)
        })
        }

  return (
    <>
    <div className="admin-dashboard">
    <Sidebar/>
     <main className='main-content' style={{flex:"1", padding:"2rem"}}>
     
 
    <div className="form-section d-flex justify-content-center mt-4">
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="petname" className="form-label">pet Name</label>
          <input
            className="form-control"
            value={petData.petname}
            onChange={handleChange}
            id="petname"
            name="petname"
            placeholder="Full Name"
          />
        </div>
         <label className="form-label">Gender</label>
<select className="form-select" 
name="gender" 
value={petData.gender}             
onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={petData.age}
            onChange={handleChange}
            id="age"
            name="age"
            placeholder="age"
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="breed" className="form-label">Breed</label>
          <input
            className="form-control"
            type="text"
            value={petData.breed}
            onChange={handleChange}
            id="breed"
            name="breed"
            placeholder="breed"
          />
        </div>
 <div className="mb-3 mt-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input
            className="form-control"
            type="text"
            value={petData.type}
            onChange={handleChange}
            id="type"
            name="type"
            placeholder="which animal"
          />
        </div>
         <div className="mb-3 mt-3">
          <label htmlFor="availability" className="form-label">Availability</label>
          <input
            className="form-control"
            type="text"
            value={petData.availability}
            onChange={handleChange}
            id="availability"
            name="availability"
            placeholder="availabiity"
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="shelter" className="form-label">Shelter Home Name</label>
          <input
            className="form-control"
            type="text"
            value={petData.shelter}
            onChange={handleChange}
            id="shelter"
            name="shelter"
            placeholder="shelter"
          />
        </div>
        
<div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
<textarea className="form-control"
value={petData.address}
onChange={handleChange}
 id="address" 
 rows="3"
 name="address"
  placeholder="Your full address">

  </textarea>
        </div>

         <div className="mb-3 mt-3">
          <label htmlFor="nature" className="form-label">Nature</label>
          <input
            className="form-control"
            type="text"
            value={petData.nature}
            onChange={handleChange}
            id="nature"
            name="nature"
            placeholder="nature"
          />
        </div>
           <div className="mb-3 mt-3">
          <label htmlFor="medical" className="form-label">Medical History</label>
          <input
            className="form-control"
            type="text"
            value={petData.medical}
            onChange={handleChange}
            id="medical"
            name="medical"
            placeholder="medical"
          />
        </div>
         <div className="mb-3">
          <label htmlFor="information" className="form-label">Information</label>
<textarea className="form-control"
value={petData.information}
onChange={handleChange}
 id="information" 
 rows="3"
 name="information"
  placeholder="information">

  </textarea>
  </div>
         
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleFileChange}
            placeholder="Paste image URL"
            required
          />
        </div>
      
        <button className="btn btn-primary mb-3" type="submit" >Submit</button>
      </form>
    </div>
      </main>
     </div>
    </>
  )
}
