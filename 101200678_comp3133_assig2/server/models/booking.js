const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  booking_id: {
    type: Number,
    required: [true, 'booking id field cannot be blank'],
    trim:true,
    unique:true,
  },
  hotel_id: {
    type: Number,
    required: [true, 'hotel id field cannot be blank'],
  },
  booking_date: {
    type: String,
    required: [true, 'date field cannot be blank'],
  },
  booking_start: {
    type: String,
    required: [true, 'date field cannot be blank'],
 
  },
  booking_end: {
    type: String,
    required: [true, 'date field cannot be blank'],
  },
  user_id: {
    type: Number,
    required: [true, 'user id field cannot be blank'],
  },
},
  {timestamps: true}
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;

