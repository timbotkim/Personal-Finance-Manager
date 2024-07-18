const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Endpoint to get monthly summary
router.get('/monthly-summary/:userId', async (req, res) => {
    const { userId } = req.params;
    const { month, year } = req.query;
    try {
        const transactions = await Transaction.find({
            userId,
            date: {
                $gte: new Date(year, month - 1, 1),
                $lt: new Date(year, month, 1),
            },
        });
        const summary = transactions.reduce((acc, transaction) => {
            acc[transaction.type] = (acc[transaction.type] || 0) + transaction.amount;
            return acc;
        }, {});
        res.status(200).send(summary);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
