const express = require("express");
const connectDB = require("../config/database");
const User = require("../models/user");
const app = express();
const bcrypt = require("bcrypt");
const validator = require("validator");

const { validation } = require("../utils/signUpvalidation");

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
app.patch("/user", async (req, res) => {
  try {
    const ALLOWED_UPDATES = ["gender", "photoUrl", "about"];

    const isUpdateAllowed = Object.keys(req.body).every((k) => {
      ALLOWED_UPDATES.includes(k);
    });

    if (!isUpdateAllowed) {
      throw new Error("Invalid update operation");
    }

    const id = req.body._id;

    await User.findByIdAndUpdate(id, req.body, { runValidators: true }).exec();
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Error occured in updating the user" + err);
  }
});

//post api
app.post("/user", async (req, res) => {
  try {
    //validate the data
    validation(req);
    const { firstName, lastName, emailId, password, gender } = req.body;

    //password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    //saving the data
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: hashedPassword,
      gender,
    });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      throw new Error("Please enter email and password");
    }
    if (!validator.isEmail(emailId)) {
      throw new Error("Please enter a valid email");
    }

    const user = await User.findOne({ emailId }).exec();
    if (!user) throw new Error("Invalid credentials");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials");
    } else {
      res.send("User logged in successfully", user);
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
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
