const express = require("express");
const connectDB = require("../config/database");
const User = require("../models/user");
const app = express();

app.use(express.json());

//post api
app.post("/signUp", async (req, res) => {
  console.log(req.body)
  // const user = new User({
  //   firstName: "raju",
  //   lastName: "kumar",
  //   age: "29",
  //   gender: "Male",
  // });
  // try {
  //   await user.save();
  //   res.send("User added successfully");
  // } catch (err) {
  //   res.status(400).send("Error occured in adding the user", err);
  // }
});

connectDB()
  .then(() => {
    console.log("Connected to the database");

    app.listen(7777, () => {
      console.log("The server is running successfully");
    });
  })
  .catch((err) => {
    console.log("Error in connecting to the database", err);
  });
