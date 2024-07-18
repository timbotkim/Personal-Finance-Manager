const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Budget', BudgetSchema);
