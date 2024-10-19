const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.post('/', protect, isAdmin, async (req, res) => {
    try {
      const { isbn, title, author, publishedDate, category, availableCopies } = req.body;
  
      const newBook = new Book({
        isbn,
        title,
        author,
        publishedDate,
        category,
        availableCopies
      });
  
      await newBook.save();
      res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
router.get('/', protect, async (req, res) => {
    try {
      const books = await Book.find({});
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
router.put('/:isbn', protect, isAdmin, async (req, res) => {
    try {
      const { isbn } = req.params;
      const updatedBook = await Book.findOneAndUpdate({ isbn }, req.body, { new: true });
  
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.json({ message: 'Book updated successfully', book: updatedBook });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
router.delete('/:isbn', protect, isAdmin, async (req, res) => {
    try {
      const { isbn } = req.params;
      const deletedBook = await Book.findOneAndDelete({ isbn });
  
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
module.exports = router;