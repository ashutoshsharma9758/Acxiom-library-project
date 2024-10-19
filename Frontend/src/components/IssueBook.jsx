import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/IssueBook.css';

const IssueBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  const handleIssueBook = async (e) => {
    e.preventDefault();
    const issueData = {
      bookId: selectedBookId,
      userId: userId,
      issueDate: new Date(),
      returnDate: new Date(new Date().setDate(new Date().getDate() + 15)), // 15 days ahead
    };

    try {
      await axios.post('http://localhost:8080/issue', issueData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Book issued successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Issue Book</h2>
      <form onSubmit={handleIssueBook}>
        <div className="form-group">
          <label>Select Book</label>
          <select
            className="form-control"
            value={selectedBookId}
            onChange={(e) => setSelectedBookId(e.target.value)}
            required
          >
            <option value="">--Select a Book--</option>
            {books.map((book) => (
              <option key={book._id} value={book._id}>
                {book.title} by {book.author}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Issue Book</button>
      </form>
    </div>
  );
};

export default IssueBook;