const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://AbhijithMaster:abhijithajith13@devtinder.sfvcupl.mongodb.net/?retryWrites=true&w=majority&appName=DevTinder/DEVTINDER"
  );
};


module.exports = connectDB;