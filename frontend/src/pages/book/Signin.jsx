import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      localStorage.setItem('email', email); // Save email to localStorage
      alert(`Welcome, ${email.split('@')[0]}! You have successfully signed in.`);
      navigate('/'); // Navigate to home/dashboard
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" style={buttonStyle}>
          Sign In
        </button>
      </form>
      <div style={linkContainerStyle}>
        <p>
          Don't have an account?{' '}
          <span style={linkStyle} onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '40px',
  minHeight: 'auto',
  maxWidth: '400px',
  marginTop: '10rem',
  marginBottom: '10rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '12px',
  margin: '12px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#41a4ff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const linkContainerStyle = {
  marginTop: '20px',
};

const linkStyle = {
  color: '#007bff',
  cursor: 'pointer',
  textDecoration: 'underline',
};

export default SignIn;
