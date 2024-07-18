const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Endpoint to create a new transaction
router.post('/', async (req, res) => {
    const { userId, type, amount, category, date } = req.body;
    try {
        const newTransaction = new Transaction({ userId, type, amount, category, date });
        await newTransaction.save();
        res.status(201).send(newTransaction);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Endpoint to get transactions for a specific user
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const transactions = await Transaction.find({ userId });
        res.status(200).send(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Endpoint to update a transaction
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { type, amount, category, date } = req.body;
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            id,
            { type, amount, category, date },
            { new: true }
        );
        res.status(200).send(updatedTransaction);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Endpoint to delete a transaction
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Transaction.findByIdAndDelete(id);
        res.status(200).send({ message: 'Transaction deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
