// app.js or server.js
const express = require('express');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const db = require('./config/db'); // Import the Mongoose connection setup
const cors = require('cors'); // Import the cors middleware
const User = require('./models/userModel'); // Import the Mongoose model

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
