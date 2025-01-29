import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage
      if (!token) {
        navigate('/signin'); // Redirect if no token found
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: { Authorization: `Bearer ${token}` }, // Send token in request
        });

        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching user data. Please try again.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/signin'); // Redirect to sign-in page
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>{error}</h2>;

  return (
    <div style={containerStyle}>
      <h2>Profile</h2>
      {user && (
        <div style={profileBoxStyle}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        </div>
      )}
    </div>
  );
};

// Inline Styles
const containerStyle = {
  padding: '40px',
  maxWidth: '500px',
  margin: 'auto',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

const profileBoxStyle = {
  textAlign: 'left',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default Profile;
