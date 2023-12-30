const express = require('express');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors'); // Import the cors middleware
const User = require('./models/userModel');

const app = express();
const port = 3010;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Route to add data
app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  try {
    const savedUser = await newUser.save();
    console.log('User added to MongoDB:', savedUser);
    res.status(201).json({ message: 'User added successfully', user: savedUser });
  } catch (error) {
    console.error('Error adding user to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  const loginUser = new User({ email, password });

  try {
    const savedUser = await loginUser.save();
    console.log('User added to MongoDB:', savedUser);
    res.status(201).json({ message: 'User added successfully', user: savedUser });
  } catch (error) {
    console.error('Error adding user to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
