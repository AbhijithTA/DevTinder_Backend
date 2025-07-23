const express = require("express");
const connectDB = require("../config/database");
const User = require("../models/user");
const app = express();

app.use(express.json());

//Api for getting the user based on the email
app.get("/user", async (req, res) => {
  const email = req.body;
  try {
    const user = await User.findOne({ emailId: email }).exec();
    res.send(user);
  } catch (err) {
    res.status(400).send("Error occured in getting the user", err);
  }
});

//api foi getting users for feed
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find().exec();
    res.send(users);
  } catch (err) {
    res.status(400).send("Error occured in getting the users", err);
  }
});

//api for updating the user
app.put("/user", async (req, res) => {
  try {
    const id = req.body._id;

    await User.findByIdAndUpdate(id, req.body, { runValidators: true }).exec();
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Error occured in updating the user", err);
    console.log(err);
  }
});

//post api
app.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error occured in adding the user", err);
  }
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
