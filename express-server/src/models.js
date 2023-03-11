const mongoose = require('mongoose');

// Create a Mongoose schema and model for the User
const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  nationalPhoneNumber: String,
  location: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
