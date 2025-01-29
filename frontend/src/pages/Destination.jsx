import React, { useState } from 'react';

const destinations = [
  {
    name: "Taj Mahal, Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
    description: "The Taj Mahal is one of the Seven Wonders of the World, known for its stunning white marble architecture.",
    details: "Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, the Taj Mahal is a symbol of eternal love.",
    activities: "Visit the main mausoleum, take a boat ride on the Yamuna River, explore the surrounding gardens.",
    bestTime: "The best time to visit is from October to March when the weather is cool and pleasant."
  },
  {
    name: "Gateway of India, Mumbai",
    image: "https://t3.ftcdn.net/jpg/02/00/55/94/360_F_200559473_wEDZgxSDPPjQfgX3sQqXcjz4ph1a79Yt.jpg",
    description: "A majestic archway located in the heart of Mumbai, it marks the arrival point for many visitors to India.",
    details: "The Gateway was built to commemorate the visit of King George V and Queen Mary to India in 1911.",
    activities: "Visit the monument, take a boat ride to Elephanta Caves, enjoy views of the Arabian Sea.",
    bestTime: "Best visited from November to February for a comfortable experience."
  },
  {
    name: "Qutub Minar, Delhi",
    image: "https://i.pinimg.com/474x/5d/49/4d/5d494d3ab6ac479b630cbfa74f3882ab.jpg",
    description: "A towering 73-meter-high minaret, the Qutub Minar is a UNESCO World Heritage Site.",
    details: "Built in 1193, the Qutub Minar is an example of Indo-Islamic Afghan architecture.",
    activities: "Climb the Qutub Minar (currently closed to the public for safety), explore the surrounding ruins.",
    bestTime: "Visit during winter months (October to March) for a pleasant climate."
  },
  {
    name: "Jaipur City Palace, Jaipur",
    image: "https://thumbs.dreamstime.com/b/panorama-hawa-mahal-palace-palace-winds-famous-landmark-beautiful-jaipur-pink-city-rajasthan-also-known-as-72440879.jpg",
    description: "A beautiful royal residence with a blend of Rajasthani and Mughal architecture, this palace is an iconic landmark in Jaipur.",
    details: "The City Palace is still the residence of the royal family of Jaipur, with stunning courtyards and museums.",
    activities: "Explore the museum, take a heritage walk, enjoy traditional Rajasthani food in nearby restaurants.",
    bestTime: "October to March is ideal for visiting Jaipur to avoid the heat."
  },
  {
    name: "Golden Temple, Amritsar",
    image: "https://wallpapers.com/images/featured/golden-temple-hd-6rp8cxk91fvj9ksx.jpg",
    description: "The Golden Temple is the holiest gurdwara in Sikhism and is known for its breathtaking beauty.",
    details: "Located in the city of Amritsar, this sacred temple attracts millions of pilgrims and visitors every year.",
    activities: "Take a dip in the holy pool, participate in community service, and experience the langar (free meal).",
    bestTime: "Winter months (October to March) offer cooler weather for exploring the temple."
  },
  {
    name: "Hampi, Karnataka",
    image: "https://media.istockphoto.com/id/137340137/photo/vittala-temple-stone-chariot-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=HMFrtHk2QCPENR6bBncce0Xz46Lg49w-HSOrb5qyU2E=",
    description: "Hampi is a UNESCO World Heritage Site and an ancient village known for its ruins and temples.",
    details: "Once the capital of the Vijayanagara Empire, Hampi is a spectacular site filled with temples, palaces, and boulders.",
    activities: "Explore the ruins, trek to the Anjaneya Hill, visit the Virupaksha Temple.",
    bestTime: "The best time to visit is between October and March."
  },
  {
    name: "Kerala Backwaters, Kerala",
    image: "https://www.keralaholidays.com/uploads/tourpackages/main/backwater.jpg",
    description: "The backwaters of Kerala offer a serene experience with lush landscapes and traditional houseboats.",
    details: "A network of lakes, rivers, and canals, the backwaters are ideal for boat rides, bird-watching, and enjoying Kerala's unique ecosystem.",
    activities: "Take a houseboat cruise, visit local villages, enjoy Kerala's authentic cuisine.",
    bestTime: "The ideal time to visit is between November and February."
  },
  {
    name: "Mysore Palace, Mysore",
    image: "https://remotetraveler.com/wp-content/uploads/2014/10/Mysore-Palace2.jpg",
    description: "A historic palace known for its grandeur and opulence, the Mysore Palace is one of India's most visited tourist sites.",
    details: "Built in the 14th century, this palace is the residence of the Wadiyar family and is a stunning example of Indo-Saracenic architecture.",
    activities: "Explore the palace, visit the nearby zoo, and attend the famous Mysore Dasara festival.",
    bestTime: "The best time to visit is during the Dasara festival (September to October)."
  },
  {
    name: "Sundarbans Mangrove Forest, West Bengal",
    image: "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2023/08/11/Sundarbans-Deer-Chitra-Deer-d4706be88bfa5ba7a3e01503f5320885.jpg?jadewits_media_id=1144",
    description: "The Sundarbans is the largest tidal halophytic mangrove forest in the world, home to the Bengal tiger.",
    details: "Located in the delta region of the Ganges, the Sundarbans is a UNESCO World Heritage Site and a biodiversity hotspot.",
    activities: "Take a boat safari, spot Bengal tigers and other wildlife, visit local villages.",
    bestTime: "The best time to visit is between October and February when the weather is cooler."
  },
  {
    name: "Andaman and Nicobar Islands",
    image: "https://t4.ftcdn.net/jpg/09/04/26/55/360_F_904265556_m8ZdwQmOGNmf7VM2c3t638BO61la2rRq.jpg",
    description: "A tropical paradise offering pristine beaches, crystal-clear waters, and a variety of water sports.",
    details: "The Andaman Islands are an archipelago in the Bay of Bengal, known for their coral reefs and rich marine life.",
    activities: "Snorkeling, scuba diving, visiting Radhanagar Beach, and exploring the Cellular Jail.",
    bestTime: "Visit between November and April for pleasant weather."
  }
];

const BestDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div style={containerStyle}>
      <h1>Best Destinations in India</h1>
      <div style={destinationsGrid}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            style={destinationCardStyle}
            onClick={() => handleDestinationClick(destination)}
          >
            <img
              src={destination.image}
              alt={destination.name}
              style={destinationImageStyle}
            />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>

      {selectedDestination && (
        <div style={detailSectionStyle}>
          <h2>{selectedDestination.name}</h2>
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            style={destinationDetailImageStyle}
          />
          <p><strong>Details:</strong> {selectedDestination.details}</p>
          <p><strong>Activities:</strong> {selectedDestination.activities}</p>
          <p><strong>Best Time to Visit:</strong> {selectedDestination.bestTime}</p>
        </div>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '40px',
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
};

const destinationsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  marginTop: '20px',
};

const destinationCardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '15px',
  cursor: 'pointer',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const destinationImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const detailSectionStyle = {
  marginTop: '40px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const destinationDetailImageStyle = {
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '8px',
};

// Add hover effect styles with shadow darkening
const destinationCardHoverStyle = {
  ...destinationCardStyle,
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)', // Darker shadow on hover
  }
};

export default BestDestinations;
