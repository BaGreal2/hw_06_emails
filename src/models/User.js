const { Schema, model } = require('mongoose');

const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationToken: {
    type: String,
    required: false,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = model('user', User);