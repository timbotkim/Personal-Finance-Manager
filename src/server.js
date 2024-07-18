const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const auth = require('./middleware/auth');  // Import the auth middleware

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = 'mongodb+srv://tim24kim:Iwant2database!@finance-backend-dev.zvsixmc.mongodb.net/?retryWrites=true&w=majority&appName=Finance-Backend-Dev';
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Route imports
const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');
const budgetRoutes = require('./routes/budgets');  // Import budget routes
const reportRoutes = require('./routes/reports');  // Import report routes

// Route middlewares
app.use('/api/users', userRoutes);
app.use('/api/transactions', auth, transactionRoutes);  // Protect transaction routes
app.use('/api/budgets', auth, budgetRoutes);  // Protect budget routes
app.use('/api/reports', auth, reportRoutes);  // Protect report routes

const port = 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
