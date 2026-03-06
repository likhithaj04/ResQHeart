import React, { useState } from 'react';
import './Contact.css'
import { useEffect } from 'react';
import axios from'axios';

export default function Contact() {
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
    try {
      axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData, { withCredentials: true });
    } catch (err) {
      console.log(err);
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="main">
        <div className="texts">
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or a case to be reported? Reach out and we'll
            get back to you as soon as possible!
          </p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3 text-start mt-4">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
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
          />
        </div>

        <button type="submit" className="btn btn-warning">Send Message</button>

        {submitted && (
          <div className="alert alert-success mt-3" role="alert">
            Thank you! Your message has been sent successfully. We'll get back to you shortly.
          </div>
        )}
      </form>

      <hr className="my-5" />

      <div className="contact-info">
        <h5> Our Location</h5>
        <p>123, Pet Street, Bangalore, Karnataka – 560001, India</p>

        <h5> Phone</h5>
        <p>+91 98765 43210</p>

        <h5> Email</h5>
        <p>contact@resqheart.org</p>
      </div>
    </>
  );
}
