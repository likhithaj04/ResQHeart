import React, { useState } from 'react';
import './Contact.css'
import { useEffect } from 'react';
import axios from'axios';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      axios.post("http://localhost:8080/contact",formData,{withCredentials:true});
      setFormData("")
    }
   catch(err){
    console.log(err)
   }
    setSubmitted(true);
    setFormData({ username: '', email: '', message: '' });
  };

  return (
    <>
     <div className="main">
  <div className="text-center text-white texts">
    <h2 >Contact Us</h2>
    <p>
      Have questions, suggestions, or a case to be reported? Reach out and we'll
      get back to you as soon as possible!
    </p>
  </div>
</div>



      <form className='w-55' style={{marginLeft:"20rem",marginTop:"2rem" }} onSubmit={handleSubmit} >
        <div className="mb-3 text-start mt-4">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Your name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning">Send Message</button>

        {submitted && (
          <div className="alert alert-success mt-3" role="alert">
            ✅ Thank you! Your message has been sent successfully. We'll get back to you shortly.
          </div>
        )}
      </form>

      <hr className="my-5" />

      <div className="text-center">
        <h5> Our Location</h5>
        <p>123, Pet Street, Bangalore, Karnataka – 560001, India</p>

        <h5> Phone</h5>
        <p>+91 98765 43210</p>

        <h5> Email</h5>
        <p>contact@resqheart.org</p>

        {/* <div className="mt-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.37381212769!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b3d1e571%3A0x5c69eb1ef0b4f607!2sMG%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1659518573958!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
      </>
  );
}
