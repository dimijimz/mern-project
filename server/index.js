
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
// Plan MongoDB schema for user model
// TODO: Implement login endpoint
// Plan to add input validation for registration and login

const User = require('./models/User');

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).send({ error: 'User registration failed' });
    }
});

// Placeholder for JWT generation in login route
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isMatch = await bcrypt.compare(password, user.password);

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
    res.send({ message: 'Login successful', token });
});

