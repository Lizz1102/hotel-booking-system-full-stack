const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbUrl= "mongodb+srv://admin:admin123@cluster0.03ief.mongodb.net/full-stack-db?retryWrites=true&w=majority"

mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
      console.log('mongodb connected', err);
  }else{
      console.log('Successfully connected to mongodb');
  }
})
