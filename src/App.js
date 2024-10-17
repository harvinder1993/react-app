// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IngredientForm from './components/IngredientForm';
import Home from './components/Home'; // Create a Home component for the main page

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Ingredient Management</h1>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/add-ingredient" element={<IngredientForm />} /> {/* IngredientForm route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
