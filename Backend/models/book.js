const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  category: {
    type: String
  },
  availableCopies: {
    type: Number,
    required: true,
    default: 1
  }
});

module.exports = mongoose.model('Book', bookSchema);