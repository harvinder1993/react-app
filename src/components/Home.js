// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Ingredient Management System</h2>
      <Link to="/add-ingredient">Add New Ingredient</Link>
    </div>
  );
};

export default Home;
