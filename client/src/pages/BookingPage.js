import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function BookingPage() {
  const [searchParams] = useSearchParams();
  const format = searchParams.get('type') || 'format1';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, format })
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert(data.message); // "Booking sent successfully!"
        setFormData({ name: '', email: '', details: '' });
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Booking form error:', error);
      alert('Failed to send booking.');
    }
  };
  

  return (
    <div className="min-h-screen bg-[#1e1b18] text-[#e6e1dc] px-4 py-10 font-[Inter]">
      <div className="max-w-3xl mx-auto bg-[#2d2926] border border-[#3e3a36] rounded-xl shadow-md p-8 space-y-6">
        <h1
          className="text-4xl font-bold text-center tracking-wide text-[#e6e1dc]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Book a Session ({format.charAt(0).toUpperCase() + format.slice(1)})
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#1e1b18] text-white border border-[#3e3a36] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#1e1b18] text-white border border-[#3e3a36] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <label htmlFor="details" className="mb-1 text-gray-300">What would you like help with?</label>
            <textarea
              name="details"
              id="details"
              rows="5"
              value={formData.details}
              onChange={handleChange}
              required
              className="bg-[#1e1b18] text-white border border-[#3e3a36] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5f4b3b] text-white px-6 py-2 rounded-md hover:bg-[#7a5c4d] transition"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
