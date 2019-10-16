import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <span className="navigation-btn">
      <Link to="/">Home</Link>
    </span>
    <span className="navigation-btn">
      <Link to="/country">Countries</Link>
    </span>
    <span className="navigation-btn">
      <Link to="/city">Cities</Link>
    </span>
    <span className="navigation-btn">
      <Link to="/place">Places</Link>
    </span>
  </nav>
);

export default Navigation;
