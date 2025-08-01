const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    password: {
      type: String,
      minLength: 3,
    },
    age: {
      type: Number,
      min: [18, "Age should be at least 18 years old"],
      max: 60,
    },
    gender: {
      type: String,

      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Invalide Gender");
        }
      },
      required: true,
      lowercase: true,
    },
    photoUrl: {
      type: String,
      default:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid URL");
        }
      },
    },
    about: {
      type: String,
      default: "Hey there! I am using this app",
    },
  },
  { timestamps: true }
);


// Token creation
userSchema.methods.getJwt = async function () {
  const user = this;
  const token = await jwt.sign({ id: user._id }, "secretKey@123", {
    expiresIn: "1h",
  });

  return token;
};


// Password comparing
userSchema.methods.validatePassword = async function (passwordInputByUser) {
  const user = this;
  const isPasswordCorrect = await bcrypt.compare(
    passwordInputByUser,
    user.password
  );

  return isPasswordCorrect;
};

module.exports = mongoose.model("User", userSchema);
