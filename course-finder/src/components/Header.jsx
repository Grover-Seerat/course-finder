import React, { useState, useEffect } from 'react';

const Header = () => {
  const [advice, setAdvice] = useState('Click button to get advice');
  const [loading, setLoading] = useState(false);

  const getAdvice = () => {
    setLoading(true);
    
    // Using fetch with .then() syntax (simpler)
    fetch('https://api.adviceslip.com/advice')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.slip && data.slip.advice) {
          setAdvice(data.slip.advice);
        } else {
          setAdvice("Believe you can and you're halfway there.");
        }
      })
      .catch(error => {
        console.error('Error fetching advice:', error);
        setAdvice("The secret of getting ahead is getting started.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAdvice(); // Load advice on component mount
  }, []);

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '25px',
      marginBottom: '25px',
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
          }}>
            "{advice}"
          </p>
          
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            marginBottom: '15px'
          }}>
            API: adviceslip.com
          </p>
          
          <button
            onClick={getAdvice}
            disabled={loading}
            style={{
              padding: '8px 16px',
              background: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Loading...' : 'Get New Advice'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;