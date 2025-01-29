import React, { useState } from "react";
import axios from "axios";

const VehicleBooking = () => {
  const [formData, setFormData] = useState({
    vehicle: "",
    location: "",
  });

  // Example userId (Replace with actual userId fetching logic)
  const userId = "64b8e1f8e1b2c9e0f8a12345";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Auto-fill vehicle type when clicking "Book Now" from selection
  const selectVehicle = (vehicleName) => {
    setFormData({ ...formData, vehicle: vehicleName });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.vehicle || !formData.location) {
      alert("Please select both a vehicle type and a pick-up location.");
      return;
    }

    try {
      const payload = { ...formData, userId };
      await axios.post("http://localhost:5000/api/vehicle_bookings", payload);
      alert("Booking Successful!");
      setFormData({ vehicle: "", location: "" });
    } catch (error) {
      console.error("Error booking vehicle:", error.response?.data || error.message);
      alert("Failed to book vehicle. Please try again.");
    }
  };

  return (
    <div style={{ backgroundColor: "#e6f7ff", padding: "50px", minHeight: "100vh" }}>
      {/* Booking Section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Left Content Section */}
        <div style={{ maxWidth: "50%" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#000" }}>
            FAST AND EASY WAY TO <br />
            <span style={{ color: "#007acc" }}>RENT A CAR</span>
          </h1>
          <p style={{ fontSize: "16px", color: "#333", marginTop: "10px" }}>
            Experience hassle-free vehicle reservations with our intuitive web app. Whether
            you're planning a road trip, a business trip, or simply need a reliable ride,
            our platform offers a vast selection of vehicles. With easy booking, flexible
            pickup and return options, and add-ons like drivers, our app ensures a seamless
            experience.
          </p>

          <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>

            <span style={{ color:'#66ab0e',fontWeight: "bold", fontSize: "30px" }}>Try EV and Save Atmosphere</span>
          </div>
        </div>

        {/* Booking Form Section */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            marginRight:'15rem',
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "320px",
            transition: "all 0.3s ease",
          }}
          className="hoverSection"
        >
          <form onSubmit={handleSubmit}>
            {/* Vehicle Type Selection */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#333", marginBottom: "5px" }}>Vehicle Type</label>
              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select Vehicle</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Truck</option>
                <option value="EV">Electric Vehicle (EV)</option> {/* Added EV option */}
              </select>
            </div>

            {/* Pick-up Location Selection */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontSize: "14px", color: "#333", marginBottom: "5px" }}>Pick-up Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Chandigarh">Chandigarh</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007acc",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

      {/* Vehicle Selection Section */}
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "#000" }}>Choose Your Vehicle</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {[
          { name: "Sedan", image: "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-2-Series-Gran-Coupe-271220221147.jpg&w=350&h=251&q=91&c=1" },
          { name: "SUV", image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/x1-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
          { name: "Bike", image: "https://media.istockphoto.com/id/594474448/photo/suzuki-gsx-r750.jpg?s=612x612&w=0&k=20&c=uCwfSf44Rya81hZyyxPTqVD815KOSpQ9uZSuZ4WUJ5Y=" },
          { name: "Truck", image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D" },
          { name: "Electric Vehicle", image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20231107043447_Tesla_Model_Y_2021_re.jpg" }, // Added EV option
        ].map((vehicle, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff", // White background for individual vehicle
              padding: "20px",
              borderRadius: "10px",
              margin: "20px",
              width: "250px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
            className="hoverVehicle"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              style={{ width: "80%", height: "120px", borderRadius: "10px" }}
            />
            <h3 style={{ marginTop: "10px", color: "#333" }}>{vehicle.name}</h3>
            <button
              onClick={() => selectVehicle(vehicle.name)}
              style={{
                backgroundColor: "#007acc",
                color: "#fff",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleBooking;
