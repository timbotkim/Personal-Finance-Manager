const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// Endpoint to create a new budget
router.post('/', async (req, res) => {
    const { userId, amount, category, startDate, endDate } = req.body;
    try {
        const newBudget = new Budget({ userId, amount, category, startDate, endDate });
        await newBudget.save();
        res.status(201).send(newBudget);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Endpoint to get budgets for a specific user
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const budgets = await Budget.find({ userId });
        res.status(200).send(budgets);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Endpoint to update a budget
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { amount, category, startDate, endDate } = req.body;
    try {
        const updatedBudget = await Budget.findByIdAndUpdate(
            id,
            { amount, category, startDate, endDate },
            { new: true }
        );
        res.status(200).send(updatedBudget);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Endpoint to delete a budget
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Budget.findByIdAndDelete(id);
        res.status(200).send({ message: 'Budget deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
