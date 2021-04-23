const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: {
    type: String,
    required: [true, 'user_id field cannot be blank!'],
    trim:true,
    unique:true
  },
  username: {
    type: String,
    required: [true, 'username field cannot be blank!'],
    trim: true,
    lowercase:true,
    minlength:4
  },
  password: {
    type: String,
    required: [true, 'password field cannot be blank!'],
    trim: true,
    minlength:4
  },
  email: {
    type: String,
    required: [true, "email field cannot be blank!"],
    trim: true,
    unique: [true, "duplicate email is not allowed!"],
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(value);
      },
  },
},
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);
module.exports = User;

