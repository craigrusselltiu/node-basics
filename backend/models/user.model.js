const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    // Only one field
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {

    // When fields are created
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
