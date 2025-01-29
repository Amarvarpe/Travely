import React, { useState, useEffect } from 'react';

const HotelBooking = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [userId, setUserId] = useState(''); // Store logged-in user's ID  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('email'); // Match the key used in SignIn
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      alert('User not logged in! Please log in first.');
    }
  }, []);

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!location || !checkInDate || !checkOutDate) {
      alert('All fields are required!');
      return;
    }

    const data = {
      location,
      checkInDate,
      checkOutDate,
      userId,
    };

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result); // Show server success message
      } else {
        alert(result.message || 'Booking have been saved sucessfully');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Booking have been submitted sucessfully');
    }
  };

  return (
    <div style={containerStyle}>
      {/* Rest of the JSX is the same */}
      <form style={formContainerStyle} onSubmit={handleSubmit}>
        {/* Input fields */}
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where are you going?"
            style={inputStyle}
          />
        </div>

        <div style={dateGroupStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Check-In Date</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Check-Out Date</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ paddingTop: '1rem' }}>
          <button type="submit" style={submitButtonStyle}>
            Submit Booking
          </button>
        </div>
      </form>
      <h2 style={subHeaderStyle}>Hotels guests love</h2>
    </div>
  );
};

// Existing inline styles (containerStyle, formContainerStyle, etc.) remain unchanged



// Inline styles for the component
const containerStyle = {
  height: "auto",
  fontFamily: "'Arial', sans-serif",
  textAlign: "center",
  alignItems: "center",
  backgroundColor: "#E8F4FF", // Light blue background
  padding: "2rem", // Padding for the whole page
};

// Other inline styles for header, form, input, and button...


const headerStyle = {
  backgroundColor: "#E8F4FF", // Matches the light blue background
  padding: "1.5rem 0",
};

const headerTextStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#000", // Black text color
  marginBottom: "1rem",
};

const highlightStyle = {
  color: "#41A4FF", // Blue text highlight
};

const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // Center items horizontally inside the form container
  gap: "2rem",
  padding: "3rem 0",
  backgroundColor: "#FFF", // White background for the form
  borderRadius: "14px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for depth
  margin: "0 auto",
  maxWidth: "80%", // Increased width
  width: "50rem", // Ensure form doesn't stretch too wide
};

const dateGroupStyle = {
  display: "flex",
  justifyContent: "space-between", // Aligns the check-in and check-out date inputs horizontally
  gap: "2rem",
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
};

const labelStyle = {
  fontWeight: "bold",
  fontSize: "0.9rem",
  marginBottom: "0.5rem",
  color: "#333",
};

const inputStyle = {
  width: "250px", // Increased width for better input field size
  padding: "0.8rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const submitButtonStyle = {
  padding: "0.8rem 2rem",
  backgroundColor: "#41A4FF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer",
  fontWeight: "bold",
};

const subHeaderStyle = {
  paddingTop: "2rem",
  fontWeight: "800",
  fontSize: "2rem",
  marginTop: "1.5rem",
  color: "#000",
};

export default HotelBooking;






//<h2 style={subHeaderStyle}>Hotels guests love</h2>
   // </div>