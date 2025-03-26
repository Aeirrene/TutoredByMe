import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add fetch logic if you want to send data to the server
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
    >
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

      {/* Message */}
      <div className="col-span-1 sm:col-span-2 flex flex-col">
        <label htmlFor="message" className="mb-1 text-gray-300">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-[#1e1b18] text-white border border-[#3e3a36] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f4b3b]"
        />
      </div>

      {/* Send Button */}
      <div className="sm:col-span-2 flex justify-center mt-2">
        <button
          type="submit"
          className="bg-[#5f4b3b] text-white px-6 py-2 rounded-md hover:bg-[#7a5c4d] transition"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default Contact;
