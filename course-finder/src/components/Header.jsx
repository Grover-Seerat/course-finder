import React, { useState, useEffect } from 'react';
const Header = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    fetchQuote();
  }, []);
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setQuote(data.slip.advice);
      setAuthor('Wisdom Quote');
    } catch (error) {
      console.log('Using fallback quotes');
      const fallbackQuotes = [
        { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
        { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" }
      ];
      const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
    }
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px'
      }}>
        <div>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#4f46e5',
            marginBottom: '8px'
          }}>📚 Course Finder Pro</h1>
          <p style={{ color: '#6b7280' }}>Find your perfect learning path</p>
        </div>
        
        <div style={{
          background: '#f3f4f6',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '100%'
        }}>
          <p style={{
            fontStyle: 'italic',
            fontSize: '18px',
            color: '#1f2937',
            marginBottom: '12px'
          }}>"{quote || 'Loading inspiration...'}"</p>
          
          {author && (
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              marginBottom: '16px'
            }}>— {author}</p>
          )}
          
          <button
            onClick={fetchQuote}
            style={{
              padding: '8px 16px',
              background: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Get New Quote
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;