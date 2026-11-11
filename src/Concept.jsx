import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Concept = () => {
  const [data, setData] = useState({ title: 'Welcome!', content: 'Explore the world of cybersecurity with hands-on lessons and real-world examples.' });
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    axios.get('<iframe allow="clipboard-read; clipboard-write" src="https://www.taskade.com/a/01JRA80J5Z3CS259R9XEH5F3YM" width="600" height="400" frameborder="0" allowfullscreen></iframe>')
      .then((response) => {
        if (response.data && response.data.title && response.data.content) {
          setData(response.data);
        } else {
          throw new Error('Invalid response structure');
        }
      })
      .catch((err) => {
        console.error('Error fetching data:', err.message);
        setError('...'); //Could not load content. Showing default intro.
      });
  }, []);

  return (
    <div className="intro-container p-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white rounded-2xl shadow-2xl max-w-2xl mx-auto mt-12">
      <h1 className="text-4xl font-black mb-5 text-emerald-400 flex items-center gap-2">🛡️ Cybersecurity 101</h1>
      <p className="mb-2 text-lg">Cybersecurity protects systems and networks from digital threats.</p>
      <p className="mb-2 text-lg">It ensures confidentiality, integrity, and availability of data.</p>
      <p className="mb-6 text-lg">You're about to begin a journey to understand and apply cybersecurity skills!</p>

      <input
        ref={inputRef}
        type="text"
        placeholder="💬 Share your thoughts..."
        className="border border-emerald-500 bg-slate-900 text-white px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 mb-6 placeholder:text-slate-400"
      />

      {error && <p className="text-yellow-400 font-medium mb-4">{error}</p>}

      {data && (
        <div className="bg-slate-800 border border-emerald-600 p-5 rounded-xl animate-fade-in">
          <h2 className="text-2xl font-bold text-emerald-300 mb-3">{data.title}</h2>
          <p className="text-slate-200 leading-relaxed text-base">{data.content}</p>
          <iframe allow="clipboard-read; clipboard-write" src="https://www.taskade.com/a/01JRA80J5Z3CS259R9XEH5F3YM" width="600" height="400" frameborder="0" allowfullscreen></iframe>
        </div>
      )}
    </div>
  );
};

export default Concept;