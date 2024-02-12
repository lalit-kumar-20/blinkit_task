const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017'; 

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error:', error);
  });

module.exports = dbURI; // Export the MongoDB connection URI

