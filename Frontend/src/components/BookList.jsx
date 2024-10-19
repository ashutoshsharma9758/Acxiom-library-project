import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get('http://localhost:8080/books');
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h2>Available Books</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Available Copies</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.availableCopies}</td>
              <td>
                {/* Conditionally render edit/delete for admin */}
                {localStorage.getItem('role') === 'admin' && (
                  <>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;