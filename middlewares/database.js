const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


/**
 * Connect to MongoDB database.
 */
const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(getMongoURI());

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

function getMongoURI() {
  return (
    'mongodb+srv://' +
    process.env.MONGO_USERNAME +
    ':' +
    process.env.MONGO_PASSWORD +
    '@' +
    process.env.MONGO_TABLE +
    '.bv02rpj.mongodb.net/EventPlanner-API?retryWrites=true&w=majority'
  );
  /*
  * const ConnectToOtherDB = assync () => {
    ...
    ...
  }
  */
}

module.exports = {
    connectMongoDB,
    //connectToOtherDB
};
