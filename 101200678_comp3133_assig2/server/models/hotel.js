const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  hotel_id: {
    type: Number,
    required: [true, 'hotel id field cannot be blank!'],
    trim:true,
    unique:true,
  },
  hotel_name: {
    type: String,
    required: [true, 'hotel name field cannot be blank!'],
    trim: true,
  },
  street: {
    type: String,
    required: [true, 'street field cannot be blank!'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'city field cannot be blank!'],
    trim: true,
  },
  postal_code: {
    type: String,
    required: [true, "postal code field cannot be blank!"],
    trim: true,
    uppercase: true,
    validate: function(value) {
      var postalRegex =/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return postalRegex.test(value);
      },
  },
  price: {
    type: Number,
    required: [true, 'price field cannot be blank!'],
    validate(value) {
        if (value < 0){
           throw new Error("enter positive value!");
        }
      }
  },
  email: {
    type: String,
    required: [true, "email field cannot be blank"],
    trim: true,
    unique: [true, "duplicate email is not allowed!"],
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(value);
      },
  },
  user_id: {
    type: Number,
  },
},
  {timestamps: true}
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;

