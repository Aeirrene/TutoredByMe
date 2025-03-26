import React from 'react';
import Contact from '../components/Contact';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleBookClick = (format) => {
    navigate(`/book?type=${format}`);
  };

  return (
    <div className="min-h-screen bg-[#1e1b18] text-[#e6e1dc] px-4 py-10 font-[Inter]">
      {/* Title */}
      <h1
        className="text-5xl font-extrabold text-center mb-16 tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        TUTORED BY ME
      </h1>

      {/* Subjects */}
      <section className="mb-20">
        <h2
          className="text-3xl font-semibold text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Subjects I Offer:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['Math', 'Science', 'Coding'].map((subject) => (
            <div
              key={subject}
              className="bg-[#2d2926] rounded-xl shadow-md p-6 border border-[#3e3a36] flex flex-col items-center space-y-4"
            >
              <div className="text-4xl">📘</div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {subject}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-300">
                <li>Foundations</li>
                <li>Challenging Concepts</li>
                <li>Exam Prep</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="mb-20">
        <h2
          className="text-3xl font-semibold text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Formats I Offer:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-[#2d2926] rounded-xl shadow-md p-6 border border-[#3e3a36] flex flex-col items-center space-y-4"
            >
              <div className="text-4xl">🧑‍🏫</div>
              <ul className="list-disc list-inside text-sm text-gray-300">
                <li>Flexible Times</li>
                <li>Focused Support</li>
                <li>Personalized Sessions</li>
              </ul>
              <button
                onClick={() => handleBookClick(`format${num}`)}
                className="mt-auto bg-[#5f4b3b] text-white px-4 py-2 rounded-lg hover:bg-[#7a5c4d] transition"
              >
                Format {num}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto bg-[#2d2926] border border-[#3e3a36] rounded-xl shadow-md p-8">
        <h2
          className="text-3xl font-semibold text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Me:
        </h2>
        <Contact />
      </section>
    </div>
  );
}

export default LandingPage;
