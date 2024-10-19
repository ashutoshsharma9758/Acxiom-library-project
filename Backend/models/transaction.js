const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    issueDate: { type: Date, default: Date.now, required: true },
    returnDate: { type: Date, required: true },
    remarks: { type: String },
    fineAmount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Transaction', transactionSchema);