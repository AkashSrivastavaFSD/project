const mongoose = require ('mongoose');

const connectDB = async () => {
  try {
    // Replace <db_password> with your actual database password
    const mongoURI = 'mongodb+srv://admin:admin12345@cluster0.r6gpi.mongodb.net/Fruits?retryWrites=true&w=majority&appName=Cluster0';

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports= connectDB;

{/*var mongoose = require('mongoose');

var connectDB = function(DATABASE_URL) {
  try {
    var DB_OPTIONS = {
      dbName: 'Fruits'
    };
    
    mongoose.connect(DATABASE_URL, DB_OPTIONS)
      .then(function() {
        console.log('connected successfully..');
      })
      .catch(function(err) {
        console.log(err);
      });
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;*/}
