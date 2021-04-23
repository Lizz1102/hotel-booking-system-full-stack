const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
  type Query {
    # user query
     user: [User!]!
     userById(user_id: ID!): [User!]!
     userByUsername(username: String!): [User!]!
     userByEmail(email: String!): [User!]!

    # hotel query
    hotel: [Hotel!]!
    hotelByName(hotel_name: String!): [Hotel!]!
    hotelByCity(city: String!):[Hotel!]!

     # booking query
    booking:[Booking!]!
   }
   
  type User {
     user_id: ID!
     username: String!
     password: String!
     email: String!
   }
  
  type Hotel{
    hotel_id: ID!
    hotel_name: String!
    street: String!
    city: String!
    postal_code: String!
    price: Float!
    email: String!
    user_id: ID!
  }
  type Booking{
    booking_id: ID!
    hotel_id: ID!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    user_id: ID!
  }
  
  type Mutation {
    # Add user
     createUser(user_id: String!, username: String!, password: String!, email: String!): User!
     updateUser(user_id:ID!, username: String!, password:String!, email:String!):User!
     deleteUser(user_id: ID!): User!

    # Add hotel
      createHotel(
        hotel_id: Int! 
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: ID!
        ): Hotel!

    # Add booking
      createBooking(booking_id: Int!, hotel_id: Int!, booking_date: String!, booking_start: String!, booking_end: String!, user_id: String!):Booking!
    } 
`