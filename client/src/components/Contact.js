import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required /><br /><br />
        <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required /><br /><br />
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default Contact;
