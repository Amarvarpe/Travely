import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');
      
      // Sending data to the backend for registration
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        mobile,
        address,
        email,
        password,
      });

      console.log('Success:', response.data);

      // Show success alert after successful registration
      alert('Congratulations! You have successfully registered to Travelly.');

      // Navigate to the sign-in page after successful registration
      navigate('/signin');
    } catch (error) {
      setErrorMessage(
        error.response?.data || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
          required
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button
          type="submit"
          style={buttonStyle}
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <div style={linkContainerStyle}>
        <p>
          Already registered?{' '}
          <span
            style={linkStyle}
            onClick={() => navigate('/signin')}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '40px',
  minHeight: 'auto',
  maxWidth: '482px',
  marginTop: '10rem',
  marginBottom: '10rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
  background: 'url("https://via.placeholder.com/500")', // Placeholder image as default
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
  opacity: '1', // Default opacity
};

const linkContainerStyle = {
  marginTop: '20px',
};

const linkStyle = {
  color: '#007bff',
  cursor: 'pointer',
  textDecoration: 'underline',
};

export default SignUp;
