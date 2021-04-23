const User = require('../models/user');
const Hotel = require('../models/hotel')
const Booking = require('../models/booking')

const db = require('../libs/db-connection');

exports.resolvers = {
    Query: {
        // user query
        user: async (parent, args, ctx, info) => {
            return await User.find({});
        },
        userById: async (parent, args, ctx, info) => {
            return await User.findById({"user_id" : args.user_id});
        },
        userByUsername: async (parent, args, ctx, info) => {
            return await User.find({"username" : args.username});
        },
        userByEmail: async (parent, args, ctx, info) => {
            return await User.find({"email" : args.email})
        },

        // Q5. List All Hotels - hotel query
        hotel: async (parent, args, ctx, info) => {
            return await Hotel.find({});
        },

        // Q7. Search Hotel by name or city
        hotelByName: async (parent, args, ctx, info) => {
            return await Hotel.find({"hotel_name" : args.hotel_name});
        },
        hotelByCity: async (parent, args, ctx, info) => {
            return await Hotel.find({"city" : args.city})
        },

        // Q8. List all your bookings - booking query
        booking: async (parent, args, ctx, info) => {
            return await Booking.find({});
        },
    },

    Mutation: {
        // Q9. Create User Profile 
        createUser: async (parent, args, ctx, info) => {
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email fortmat is not valid!")
            }
            let user = new User({
                user_id:args.user_id,
                username: args.username,
                password:args.password,
                email: args.email,
            });
            return await user.save();
        },

        // update user
        updateUser: async (parent, args, ctx, info) => {
            if (!args.user_id){
                return JSON.stringify({status: false, "message" : "user not found!"});
            }
            return await User.findOneAndUpdate({
                user_id: args.user_id
            },
            {
                $set: {
                    user_id: args.user_id,
                    username: args.username,
                    password: args.password,
                    email: args.email
                }
            }, 
            {new: true}, (err, user) => {
                if (err){
                    console.log('Unable to update!');
                } else{
                    return user;
                }
            });
        },

        //   delete user
        deleteUser: async (parent, args, ctx, info) => {
            if (!args.user_id) {
                return JSON.stringify({status: false, "message": "unable to find the user!"});
            }
            return await User.findOneAndDelete({"user_id":args.user_id})
        },

        
        createHotel: async (parent, args, ctx, info) => {
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase());

            const postalExpression = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
            const isValidPostal = postalExpression.test(String(args.postal_code).toLowerCase());
            
            const isValidPrice = args.price >= 0;
        
            var users=[]
            users =  await User.find({})
            var fetchuuid = users.find((user)=>{
                return user.user_id===args.user_id
            })
           
            if(!fetchuuid){
                throw new Error ("user doest not exist!")
            }
            if(!isValidEmail){
                throw new Error("email is not valid!")
            }
            if(!isValidPostal){
                throw new Error("postal code is not valid!")
            }
            if(!isValidPrice){
                throw new Error("price less than 0 is not valid!")
            }

            let hotel = new Hotel({
                hotel_id:args.hotel_id,
                hotel_name:args.hotel_name,
                street:args.street,
                city:args.city,
                postal_code:args.postal_code,
                price:args.price,
                email:args.email,
                user_id:args.user_id
            });
            return await hotel.save();
        },

        // Q6. Book Hotels - create booking 
        createBooking: async (parent, args, ctx, info) => {
            var users=[]
            var hotels=[]
            users =  await User.find({})
            var fetchuid = users.find((user)=>{
                return user.user_id===args.user_id
            })

            hotels = await Hotel.find({})
            var fetchhid = hotels.find((hotel)=>{
                return hotel.hotel_id === args.hotel_id
            })
           
            if(!fetchuid){
                throw new Error ("user with this ID doest not exist to book hotel!")
            }
            if(!fetchhid){
                throw new Error ("hotel with this ID does not exist to book hotel!")
            }
            let booking = new Booking({
                booking_id:args.booking_id,
                hotel_id:args.hotel_id,
                booking_date:args.booking_date,
                booking_start:args.booking_start,
                booking_end:args.booking_end,
                user_id:args.user_id
            });
            return await booking.save();
        },
    }
}