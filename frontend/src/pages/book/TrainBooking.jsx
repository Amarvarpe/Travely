import React, { useState } from "react";
import axios from "axios";

const TrainBooking = () => {
  const [formData, setFormData] = useState({
    from: "New Delhi",
    to: "Mumbai",
    departureDate: "",
    returnDate: "",
    trainClass: "First Class",
    passengers: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Replace with the logged-in user's email
      const email = "user@example.com"; // Ideally, this should be dynamically fetched from your authentication system
  
      const response = await axios.post("http://localhost:5000/api/trainbookings", {
        ...formData,
        email, // Send the email instead of userId
      });
  
      alert("Booking successful: " + response.data.message);

      console.log(handleSubmit)
    } catch (error) {
      console.error(error);
      alert("Failed to book. Please try again.");
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgb(186 234 255)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          padding: "50px 20px",
          color: "#fff",
          height:'auto'
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700", color: "black" }}>EASILY BOOK YOUR TRAIN TICKETS ONLINE WITH</h1>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#007bff" }}>TRAVELY</h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "10px auto", color: "#0b2335" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui pulvinar, volutpat turpis vel,
          elementum odio.
        </p>
      </div>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(28, 28, 28, 0.1)",
          padding: "30px",
          maxWidth: "800px",
          margin: "30px auto",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {/* From */}
          <div>
            <label style={{ display: "block", fontSize: "1rem", marginBottom: "5px", color: "#555" }}>From</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* To */}
          <div>
            <label style={{ display: "block", fontSize: "1rem", marginBottom: "5px", color: "#555" }}>To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Departure Date */}
          <div>
            <label style={{ display: "block", fontSize: "1rem", marginBottom: "5px", color: "#555" }}>Departure Date</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Return Date */}
          <div>
            <label style={{ display: "block", fontSize: "1rem", marginBottom: "5px", color: "#555" }}>Return Date</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Class */}
          <div>
            <label style={{ display: "block", fontSize: "1rem", marginBottom: "5px", color: "#555" }}>Class</label>
            <select
              name="trainClass"
              value={formData.trainClass}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
              }}
            >
              <option value="First Class">First Class</option>
              <option value="Second Class">Second Class</option>
              <option value="Third Class">Third Class</option>
            </select>
          </div>

          {/* Passengers */}
          <div>
            <label style={{ display: "block", fontSize: "1rem", marginBottom: "5px", color: "#555" }}>Number of Passengers</label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "1rem",
              }}
              min="1"
            />
          </div>
        </div>
        <button
          type="submit"
          style={{
            marginTop: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default TrainBooking;
