import React, { useState } from 'react';
import axios from 'axios';

const IngredientForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState('');

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData to send files and other data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('status', status);
    formData.append('logo', logo);  // Append file

    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:3000/ingredient', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Success message
      setMessage(response.data.message);
    } catch (error) {
      // Error message
      setMessage(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div>
      <h2>Add New Ingredient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Status:</label>
          <input type="number" value={status} onChange={(e) => setStatus(e.target.value)} required />
        </div>
        <div>
          <label>Logo:</label>
          <input type="file" onChange={(e) => setLogo(e.target.files[0])} required />
        </div>
        <button type="submit">Add Ingredient</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default IngredientForm;
