const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Basic route
app.get('/', (req, res) => {
    res.send('Express server is running.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/register', (req, res) => {
    // Handle user registration
});

app.post('/api/login', (req, res) => {
    // Handle user login
});

app.get('/api/profile', (req, res) => {
    // Retrieve user profile
});
