import React from 'react';
import { Link } from 'react-router-dom';

const navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/country">Countries</Link>
    <Link to="/city">Cities</Link>
    <Link to="/place">Places</Link>
  </nav>
);

export default navigation;
