const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const eventRoutes = require('./routes/events');
const { connectMongoDB } = require('./middlewares/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/events', eventRoutes);

// Hello API
app.use('/', (req, res) => {
  res.send('Hello NODE API!');
});

// Connect to MongoDB
connectMongoDB()
  .then(() => {
    app.listen(3000, () => {
      console.log('Listening on port: 3000');
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
