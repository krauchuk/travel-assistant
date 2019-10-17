import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <span className="navigation__link">
      <Link to="/">Home</Link>
    </span>
    <span className="navigation__link">
      <Link to="/country">Countries</Link>
    </span>
    <span className="navigation__link">
      <Link to="/city">Cities</Link>
    </span>
    <span className="navigation__link">
      <Link to="/place">Places</Link>
    </span>
  </nav>
);

export default Navigation;
