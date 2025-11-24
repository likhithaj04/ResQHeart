import { useState } from "react";
import { useParams } from "react-router-dom"; 
import { toast } from "react-toastify";

export default function Donation() {
    const { id } = useParams();  // <-- this is shelterId
  console.log("DonationPage ShelterId:", id); // check id

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    shelterId:id
  });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleDonate = async (e) => {
    e.preventDefault();
    const { name, email, phone, amount,shelterId=id } = form;

    if (!name || !email || !phone || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    const res = await fetch("http://localhost:8080/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials:"include",
      body: JSON.stringify({ form }),
    });
    const order = await res.json();
   
    //  Razorpay Checkout
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "ResQHeart Donations",
      description: `Donation by ${name}`,
      image: "https://razorpay.com/favicon.png", 
      handler: function (response) {
        toast.success("Thank you for your generous donation")
        console.log("Payment Success:", response);
      },
      prefill: {
        name,
        email,
        contact: phone,
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{marginTop:"7rem",marginBottom:"5rem"}}>
      <form
        onSubmit={handleDonate}
        className="bg-white shadow-lg rounded-xl p-4 w-full max-w-md flex flex-col gap-4"
      >
        {/* Header with logo */}
        <div className="flex flex-col items-center mb-2">
          <img
            src="https://razorpay.com/favicon.png"
            alt="Razorpay Logo"
            className="w-12 h-12 mb-2"
          />
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Donate with Razorpay
          </h2>
        </div>

        {/* Input fields stacked */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Donation Amount (₹)"
          min="1"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Donate Now
        </button>

        <p className="text-xs text-gray-400 text-center mt-2">
          Powered by Razorpay Secure Payments
        </p>
      </form>
    </div>
  );
}
