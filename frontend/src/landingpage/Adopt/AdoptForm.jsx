import React, { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'

export default function AdoptForm() {
    const {id}=useParams()

  const [formData, setFormData] = useState({
    fullname: "",
    gender:"",
    mobile:"",
    address:"",
    email:"",
    petname:"",
    experience:"",
    livewith:"",

  });
   const navigate=useNavigate()
  const navigation=()=>{
    navigate("/submission")
  }

  let handleChange=(event)=>{
    setFormData((currData)=>{
        return{
            ...currData,[event.target.name]:event.target.value
        };
    });
  }

  let handleSubmit=async (event)=>{
        event.preventDefault();
        await axios.post(`${REACT_APP_API_URL}/adopt/form/${id}`,formData, {
  withCredentials: true
});

  }

  return (
    <div className="form-section d-flex justify-content-center mt-5">
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">user Name</label>
          <input
            className="form-control"
            value={formData.fullname}
            onChange={handleChange}
            id="fullname"
            name="fullname"
            placeholder="user Name"
          />
        </div>
         <label className="form-label">Gender</label>
<select className="form-select" 
name="gender" 
value={formData.gender}             
onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>

        <div className="mb-3 mt-3">
          <label htmlFor="mobilenumber" className="form-label">Mobile Number</label>
          <input
            // type="number"
            className="form-control"
            value={formData.mobile}
            onChange={handleChange}
            id="mobilenumber"
            name="mobile"
            placeholder="Mobile Number"
          />
        </div>

<div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
<textarea className="form-control"
value={formData.address}
onChange={handleChange}
 id="address" 
 rows="3"
 name="address"
  placeholder="Your full address">

  </textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="petname" className="form-label">Name of the pet you're interested in</label>
          <input
            className="form-control"
            value={formData.petname}
            onChange={handleChange}
            id="petname"
            name="petname"
            placeholder="Pet Name"
          />
        </div>
         
        <div className="mb-3">
            <label className="form-label"
            name="experience"
            id="experience"
             value={formData.experience}
            onChange={handleChange}>Do you have prior experience with pets?</label>
<div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="experience" id="yesExp" value="yes" />
    <label className="form-check-label" htmlFor="yesExp">Yes</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="experience" id="noExp" value="no" />
    <label className="form-check-label" htmlFor="noExp">No</label>
  </div>
</div>

        </div>

        <div className="mb-3">
          <label htmlFor="livewith" className="form-label">Who do you live with?</label>
          <input
            className="form-control"
            id="livewith"
            name="livewith"
            value={formData.livewith}
            onChange={handleChange}
            placeholder="e.g., Family, Friends"
          />
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="understandAdoption" />
          <label className="form-check-label" htmlFor="understandAdoption">
            A. I understand that filling this form does not guarantee adoption. The final decision is made by the rescuer/animal shelter.
          </label>
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="understandFee" />
          <label className="form-check-label" htmlFor="understandFee">
I understand that I am expected to follow all rules and regulations and act responsibly. I acknowledge that any failure to comply may subject me to applicable legal terms and conditions.          </label>
        </div>

        <button className="btn btn-primary mb-3" type="submit" onClick={navigation}>Submit</button>
      </form>
    </div>
  );
}
