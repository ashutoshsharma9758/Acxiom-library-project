const express = require('express');
const Transaction = require('../models/transaction.js');
const {protect} = require('../middlewares/isAuth.js'); 
const router = express.Router();

router.post('/', protect, async (req, res) => {
    const { bookId, userId, returnDate, remarks } = req.body;

    if (!bookId || !userId || !returnDate) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
    }

    try {
        const newTransaction = new Transaction({
            bookId,
            userId,
            returnDate,
            remarks,
            issueDate: Date.now(),
        });

        await newTransaction.save();
        res.status(201).json({ success: true, message: 'Book issued successfully!', transaction: newTransaction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

router.get('/', protect, async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('bookId').populate('userId');
        res.status(200).json({ success: true, transactions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});
module.exports = router;
