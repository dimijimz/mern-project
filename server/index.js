
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the MERN project!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// TODO: Connect to MongoDB database

const cors = require('cors');
app.use(cors());

// TODO: Define API routes for user registration and login
// Placeholder for user authentication setup
// Plan to implement JWT authentication
const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

// TODO: Implement user registration endpoint
