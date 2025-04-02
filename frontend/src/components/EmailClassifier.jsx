// EmailClassifier.jsx
import React, { useState } from 'react';
import '../styles/EmailClassifier.css';

const EmailClassifier = () => {
  const [emailText, setEmailText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:8000/classify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: emailText }),
      });
      
      const data = await response.json();
      setResult(data.classification);
    } catch (error) {
      console.error('Error:', error);
      setResult('Error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-classifier-container">
      <h2 className='heading'>Email Spam/Ham Classifier</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="email-textarea"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder="Enter email text here..."
          rows="10"
          cols="50"
        />
        <button
          type="submit"
          className="classify-button"
          disabled={loading}
        >
          {loading ? 'Classifying...' : 'Classify Email'}
        </button>
      </form>
      {result && (
        <div className="result-display">
          <h3 className={result === 'Error occurred' ? 'error' : ''}>
            Result: {result}
          </h3>
        </div>
      )}
    </div>
  );
};

export default EmailClassifier;