const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const eventRoutes = require('./routes/events');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => {
  res.send('Hello NODE API!');
});

app.use('/events', eventRoutes);

// Connect to MongoDB
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://' +
        process.env.MONGO_USERNAME +
        ':' +
        process.env.MONGO_PASSWORD +
        '@' +
        process.env.MONGO_TABLE +
        '.bv02rpj.mongodb.net/EventPlanner-API?retryWrites=true&w=majority'
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Listening on port: 3000');
  });
});
