import React, { useState } from 'react';
import axios from 'axios';

export default function TourPackages() {
  const [formData, setFormData] = useState({
    destination: '',
    price: '',
    duration: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tour_packages', formData);
      alert('Tour package saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Error saving tour package');
    }
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '82px',
    borderRadius: '12px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '560px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '18px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '16px',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#2563eb',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#eff6ff',
      }}
    >
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>
          Add Tour Package
        </h1>
        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>From</label>
          <input
            type="text"
            name="from"
            style={inputStyle}
            onChange={handleChange}
          />
        </div>


        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>To</label>
          <input
            type="text"
            name="to"
            style={inputStyle}
            onChange={handleChange}
          />
        </div>



        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Start Date</label>
          <input
            type="date"
            name="startDate"
            style={inputStyle}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Duration (Days)</label>
          <input
            type="number"
            name="duration"
            style={inputStyle}
            onChange={handleChange}
          />
        </div>
        

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Group Member</label>
          <input
            type="number"
            name="members"
            style={inputStyle}
            onChange={handleChange}
          />
        </div>
       
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
