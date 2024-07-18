# Finance-Backend

This is a personal financial management system built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Transaction management (create, read, update, delete)
- Budget management
- Reporting and analytics

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your MongoDB connection in `src/server.js`
4. Start the server: `npm start`

## API Endpoints

### Users
- POST `/api/users/register` - Register a new user
- POST `/api/users/login` - Log in a user

### Transactions
- POST `/api/transactions` - Create a new transaction
- GET `/api/transactions/user/:userId` - Get transactions for a specific user
- PUT `/api/transactions/:id` - Update a transaction
- DELETE `/api/transactions/:id` - Delete a transaction

### Budgets
- POST `/api/budgets` - Create a new budget
- GET `/api/budgets/user/:userId` - Get budgets for a specific user
- PUT `/api/budgets/:id` - Update a budget
- DELETE `/api/budgets/:id` - Delete a budget

### Reports
- GET `/api/reports/monthly-summary/:userId` - Get monthly summary for a user

## License

This project is licensed under the MIT License.
