import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [role, setRole] = useState('');
  const deleteBook = async(isbn)=>{
    try{
      await axios.delete(`http://localhost:8080/books/${isbn}`);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get('http://localhost:8080/books');
      setBooks(data);
    };
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
        setRole(response.data.role); // Set the role based on user data
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchUser();
    fetchBooks();
  }, []);

  return (
<div className="container">
  <h2>Available Books</h2>
  <table className="table" style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>Author</th>
        <th>Available Copies</th>
        {role === 'admin' && <th colSpan={2} style={{ textAlign: 'center' }}>Action</th>} 
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book._id}>
          <td>{book.isbn}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.availableCopies}</td>
          {role === 'admin' && 
          <td colSpan={2} style={{ textAlign: 'center' }}>
              <>
                <button className="btn btn-warning" style={{ marginRight: '5px' }}>Edit</button>
                <button className="btn btn-danger" onClick={()=>deleteBook(book.isbn)}>Delete</button>
              </>
          </td>
          }
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default BookList;