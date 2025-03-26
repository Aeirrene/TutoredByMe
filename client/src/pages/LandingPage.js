import React from 'react';
import Contact from '../components/Contact';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleBookClick = (format) => {
    navigate(`/book?type=${format}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <h1>Welcome to TutoredByMe</h1>
      <p>I tutor in Math, Computer Science, and more.</p>

      <h2>Choose a tutoring format:</h2>
      <button onClick={() => handleBookClick('virtual')}>Virtual</button>{' '}
      <button onClick={() => handleBookClick('inperson')}>In-Person</button>{' '}
      <button onClick={() => handleBookClick('group')}>Group</button>

      <hr />
      <Contact />
    </div>
  );
}

export default LandingPage;
