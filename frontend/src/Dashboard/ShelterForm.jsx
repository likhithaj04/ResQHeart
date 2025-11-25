import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { toast } from "react-toastify";


export default function ShelterForm() {
  const [formData, setFormData] = useState({
    shelterName: '',
    establishedIn: '',
    address: '',
    website: '',
    contactNumber: '',
    email: '',
    capacity: '',
    animalTypes: '',
    facilities: '',
    openingHours: '',
    totalVolunteers: '',
    petsPresent: '',
    petsAdopted: '',
    livesSaved: '',
    helpProvided: '',
    volunteerActivities: '',
    summary: '',
    successStories: ''
  });

  const [gallery, setGallery] = useState([]);

  // For text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // For multiple file uploads
  const handleFileChange = (e) => {
    console.log(e.target.files);
    setGallery(e.target.files); // FileList
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    for (const key in formData) {
      if (key === 'animalTypes' || key === 'facilities') {
        const items = formData[key].split(',').map(item => item.trim());
        items.forEach(item => fd.append(key, item)); // multiple fields for same key
      } else {
        fd.append(key, formData[key]);
      }
    }

    for (let i = 0; i < gallery.length; i++) {
      fd.append('gallery', gallery[i]);
    }

    try {
      const res = await axios.post(`${REACT_APP_API_URL}/shelter`, fd, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (res.data.success) {
        toast.success('Shelter added with gallery!');
      } else {
        toast.error(res.data.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error adding shelter!');
    }
  };


  return (
    <>
       <div className="admin-dashboard">
        <Sidebar/>
      <form onSubmit={handleSubmit} className="row g-3 ms-4 mt-5">
        <div className="col-md-6">
          <label className="form-label">Shelter Name</label>
          <input type="text" className="form-control" name="shelterName" value={formData.shelterName} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Established In</label>
          <input type="number" className="form-control" name="establishedIn" value={formData.establishedIn} onChange={handleChange} required />
        </div>

        <div className="col-12">
          <label className="form-label">Address</label>
          <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} required></textarea>
        </div>

        <div className="col-md-6">
          <label className="form-label">Website</label>
          <input type="text" className="form-control" name="website" value={formData.website} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Contact Number</label>
          <input type="text" className="form-control" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Capacity</label>
          <input type="number" className="form-control" name="capacity" value={formData.capacity} onChange={handleChange} />
        </div>

        <div className="col-12">
          <label className="form-label">Animal Types (comma separated)</label>
          <input type="text" className="form-control" name="animalTypes" value={formData.animalTypes} onChange={handleChange} />
        </div>

        <div className="col-12">
          <label className="form-label">Facilities (comma separated)</label>
          <input type="text" className="form-control" name="facilities" value={formData.facilities} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Opening Hours</label>
          <input type="text" className="form-control" name="openingHours" value={formData.openingHours} onChange={handleChange} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Total Volunteers</label>
          <input type="number" className="form-control" name="totalVolunteers" value={formData.totalVolunteers} onChange={handleChange} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Pets Present</label>
          <input type="number" className="form-control" name="petsPresent" value={formData.petsPresent} onChange={handleChange} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Pets Adopted</label>
          <input type="number" className="form-control" name="petsAdopted" value={formData.petsAdopted} onChange={handleChange} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Lives Saved</label>
          <input type="number" className="form-control" name="livesSaved" value={formData.livesSaved} onChange={handleChange} />
        </div>

        <div className="col-12">
          <label className="form-label">Help Provided</label>
          <textarea className="form-control" name="helpProvided" value={formData.helpProvided} onChange={handleChange}></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Volunteer Activities</label>
          <textarea className="form-control" name="volunteerActivities" value={formData.volunteerActivities} onChange={handleChange}></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Summary</label>
          <textarea className="form-control" name="summary" value={formData.summary} onChange={handleChange}></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Success Stories</label>
          <textarea className="form-control" name="successStories" value={formData.successStories} onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Gallery Images</label>
          <input
            type="file"
            multiple
            name="gallery"
            className="form-control"
            onChange={handleFileChange}
          />
          <small className="text-muted">You can select multiple images.</small>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success">Add Shelter</button>
        </div>
      </form>
    </div>
    </>
  )
}
