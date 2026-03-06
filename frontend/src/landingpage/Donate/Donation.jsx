import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import './Donation.css';

export default function Donation() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    shelterId: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    const { name, email, phone, amount } = form;

    if (!name || !email || !phone || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/donate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ form }),
    });
    const order = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "ResQHeart Donations",
      description: `Donation by ${name}`,
      image: "https://razorpay.com/favicon.png",
      handler: function (response) {
        toast.success("Thank you for your generous donation");
        console.log("Payment Success:", response);
      },
      prefill: { name, email, contact: phone },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="donation-wrapper">
      <form className="donation-form" onSubmit={handleDonate}>

        <div className="logo-wrap">
          <img src="https://razorpay.com/favicon.png" alt="Razorpay Logo" />
          <h2>Donate with Razorpay</h2>
        </div>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Donation Amount (₹)"
          min="1"
        />

        <button type="submit" className="donate-btn">
          Donate Now
        </button>

        <p className="powered-text">Powered by Razorpay Secure Payments</p>
      </form>
    </div>
  );
}