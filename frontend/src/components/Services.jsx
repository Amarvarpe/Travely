import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Services.css'; // Ensure you have a proper CSS file to style the components
import { FaHotel, FaTrain } from 'react-icons/fa';
import { MdTour } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';


// Categories containing icons, titles, and navigation paths
const categories = [
  {
    name: 'Hotel Reservation',
    icon: <FaHotel />,
    path: '/hotels', // Path for navigation
  },
  {
    name: 'Tour Package Reservation',
    icon: <MdTour />,
    path: '/tour-packages',
  },
  {
    name: 'Vehicle Reservation',
    icon: <AiFillCar />,
    path: '/vehicles',
  },
  {
    name: 'Train Reservation',
    icon: <FaTrain />,
    path: '/train-reservation',
  },
 
];

// Services component
const Services = () => {
 
  return (
    <div className="container">
      <h2 className="title">Our Services</h2>
      <h3 className="subtitle">What We Offer</h3>
      <p className="description">
      We provide top-quality travel solutions, including hotel bookings, tour packages, vehicle rentals, and train reservations, ensuring a seamless and memorable journey for you. </p>

      <div className="services-grid">
        {/* Map through the categories and pass icon, title, and navigation path */}
        {categories.map((category, index) => (
          <ServiceCard
            key={index}
            icon={category.icon}
            title={category.name}
            path={category.path} // Pass the navigation path
          />
        ))}
      </div>
    </div>
  );
};

// ServiceCard component for each service item
const ServiceCard = ({ icon, title, path }) => {
  const navigate = useNavigate(); // Initialize useNavigate for ServiceCard

  const handleClick = () => {
    navigate(path); // Navigate to the respective path
  };

  return (
    <div className="service-card" onClick={handleClick}>
      <div className="icon">{icon}</div>
      <p>{title}</p>
    </div>
  );
};

export default Services;
