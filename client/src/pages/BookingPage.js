import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function BookingPage() {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get('type') || 'general';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tutoringType: type,
    availability: '',
    questions: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // You can reuse your existing backend route or make a new one
      const res = await axios.post('http://localhost:5000/api/contact', {
        name: formData.name,
        email: formData.email,
        message: `
Tutoring Type: ${formData.tutoringType}
Availability: ${formData.availability}
Additional Questions: ${formData.questions}
        `,
      });

      setStatus(res.data.message);
      setFormData({
        name: '',
        email: '',
        tutoringType: type,
        availability: '',
        questions: '',
      });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send booking.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <h1>Book a {type} Tutoring Session</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="availability"
          placeholder="Your availability (days/times)"
          value={formData.availability}
          onChange={handleChange}
          required
        /><br /><br />

        <textarea
          name="questions"
          placeholder="Any specific topics or questions?"
          value={formData.questions}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit Booking</button>
      </form>

      <p>{status}</p>
    </div>
  );
}

export default BookingPage;
