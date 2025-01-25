const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/fullstack', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error: ', err));

app.get('/api/hello', (req, res) => {
	  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
	  console.log(`Server running on port ${port}`);
});

