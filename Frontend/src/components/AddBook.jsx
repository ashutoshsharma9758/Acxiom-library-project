import React, { useState } from 'react';
import axios from 'axios';
import "../styles/AddBook.css";
const AddBook = () => {
  const [formData, setFormData] = useState({
    isbn: '',
    title: '',
    author: '',
    publishedDate: '',
    genre: '',
    availableCopies: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/books', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Book added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            className="form-control"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;