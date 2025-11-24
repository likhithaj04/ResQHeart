import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function PetList() {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState("all"); // ✅ new filter state
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    axios.get("http://localhost:8080/petdata")
      .then(res => {
        setPets(Array.isArray(res.data) ? res.data : []); 
      })
      .catch(err => console.log(err));
  }, []);

  const handleDel = (id) => {
    axios.delete(`http://localhost:8080/petdata/${id}`)
      .then(res => {
        console.log("Deleted Pet:", res.data.deletedPet);
        toast.success("Pet deleted");
        setPets(prev => prev.filter(p => p._id !== id));
      })
      .catch(err => console.log(err));
  };

  const filteredPets = filter === "all" 
    ? pets 
    : pets.filter(p => p.type?.toLowerCase() === filter);

  return (
    <div>
      {/* Filter dropdown */}
      <div className="mb-3">
        <label className="me-2 fw-bold">Filter:</label>
        <select 
          className="form-select w-auto d-inline-block" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
        </select>
      </div>

      {/* Pets Grid */}
      <div className="row row-cols-5">
        {filteredPets.length === 0 && <p>No pets found.</p>} 

        {filteredPets.map((p) => (
          <div key={p._id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100" style={{ width: "100%" }}>
<img 
  src={p.image?.url || "/placeholder.jpg"} 
  className="card-img-top" 
  alt={p.petname}
  style={{ height: "500px", objectFit: "cover" }}
/>
              <div className="card-body">
                <h5 className="card-petname">Name: {p.petname}</h5>
                <p className="card-text">Age: {p.age}</p>
                <p className="card-text">{p.gender}</p>
                <p className="card-text">{p.breed}</p>
                <p className="card-text">{p.availability}</p>
                <p className="card-text">Shelter-Home: {p.shelter}</p>

                <button className="btn btn-primary" onClick={() => navigate(`/info/${p._id}`)}>
                  More Info
                </button>

                <br /><br />

                {isAdmin && (
                  <button className="btn btn-danger" onClick={() => handleDel(p._id)}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
