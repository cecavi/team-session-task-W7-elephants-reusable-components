import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <nav className="topnav">
        <ul>
          <li href="#home">About</li>
          <li href="#news">Trips</li>
          <li href="#contact">Pricing</li>
          <li href="#about">Contact</li>
        </ul>
      </nav>
      <h1>Get ready for {title}</h1>
    </div>
  );
}

export default Header;