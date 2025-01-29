import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userInitial, setUserInitial] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setUserInitial(email.charAt(0).toUpperCase());
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    setUserInitial('');
    alert('You have been logged out.');
    setUserDropdownVisible(false);
  };

  return (
    <div
      style={{
        background: 'rgb(249 250 251)',
        padding: '0 20px',
        boxSizing: 'border-box',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        boxShadow: '4px 3px 4px grey',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          fontFamily: 'Arial, sans-serif',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <div
          style={{
            marginLeft: '85px',
            color: 'rgb(65 164 255)',
            fontWeight: '800',
            fontSize: '24px',
            lineHeight: '2.5rem',
          }}
        >
          <h3>Travely</h3>
        </div>

        <ul
          style={{
            display: 'flex',
            listStyleType: 'none',
            margin: '0',
            padding: '0',
          }}
        >
          <li style={navItemStyle}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/destination" style={linkStyle}>
              Destinations
            </Link>
          </li>
          <li
            style={navItemStyle}
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <span style={linkStyle}>Booking</span>
            <span style={dropdownArrowStyle}>▼</span>
            {dropdownVisible && (
              <ul style={dropdownMenuStyle}>
                <li
                  style={{
                    ...dropdownItemStyle,
                    backgroundColor: hoveredItem === 'hotels' ? '#f0f0f0' : 'white',
                  }}
                  onMouseEnter={() => setHoveredItem('hotels')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to="/hotels" style={dropdownLinkStyle}>
                    Hotels
                  </Link>
                </li>
                <li
                  style={{
                    ...dropdownItemStyle,
                    backgroundColor: hoveredItem === 'tour-packages' ? '#f0f0f0' : 'white',
                  }}
                  onMouseEnter={() => setHoveredItem('tour-packages')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to="/tour-packages" style={dropdownLinkStyle}>
                    Tour Packages
                  </Link>
                </li>
                <li
                  style={{
                    ...dropdownItemStyle,
                    backgroundColor: hoveredItem === 'trains' ? '#f0f0f0' : 'white',
                  }}
                  onMouseEnter={() => setHoveredItem('trains')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to="/trainbooking" style={dropdownLinkStyle}>
                    Train Booking
                  </Link>
                </li>
                <li
                  style={{
                    ...dropdownItemStyle,
                    backgroundColor: hoveredItem === 'vehicles' ? '#f0f0f0' : 'white',
                  }}
                  onMouseEnter={() => setHoveredItem('vehicles')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to="/vehicles" style={dropdownLinkStyle}>
                    Vehicle Booking
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div style={{ display: 'flex', gap: '10px', marginRight: '85px', position: 'relative' }}>
          {userInitial ? (
            <div
              style={userIconStyle}
              onClick={() => setUserDropdownVisible(!userDropdownVisible)}
            >
              {userInitial}
              {userDropdownVisible && (
                <ul style={userDropdownStyle}>
                  <li style={dropdownItemStyle}>
                    <Link to="/profile" style={dropdownLinkStyle} onClick={() => setUserDropdownVisible(false)}>
                     <h5> Profile</h5>
                    </Link>
                  </li>
                  <li style={dropdownItemStyle} onClick={handleLogout}>
                    <h5 style={{color:'red'}}>Sign Out</h5>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" style={authButtonStyle}>
                Sign In
              </Link>
              <Link to="/signup" style={{ ...authButtonStyle, backgroundColor: 'rgb(55 55 55)' }}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

const navItemStyle = {
  margin: '0 20px',
  fontSize: '1.2rem',
  position: 'relative',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  padding: '10px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
};

const dropdownArrowStyle = {
  marginLeft: '5px',
};

const dropdownMenuStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  padding: '10px',
  margin: '0',
  zIndex: '999',
  borderRadius: '5px',
  marginTop: '5px',
  listStyleType: 'disc',
  paddingLeft: '20px',
};

const dropdownItemStyle = {
  padding: '8px 10px',
  cursor: 'pointer',
};

const dropdownLinkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const userIconStyle = {
  backgroundColor: 'rgb(65 164 255)',
  color: 'white',
  padding: '10px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  fontWeight: 'bold',
  cursor: 'pointer',
  position: 'relative',
};

const userDropdownStyle = {
  position: 'absolute',
  top: '50px',
  right: '0',
  backgroundColor: 'white',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
  width: '120px',
  listStyle: 'none',
  padding: '10px 0',
  textAlign: 'center',
  zIndex: '1000',
};

const authButtonStyle = {
  backgroundColor: 'rgb(65 164 255)',
  color: 'white',
  padding: '10px 20px',
  textDecoration: 'none',
  borderRadius: '20px',
  fontWeight: '600',
  fontSize: '1rem',
  textAlign: 'center',
};

export default Navbar;
