const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Please login");
    }

    const decoded = jwt.verify(token, "secretKey@123");
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(404).send("Error: " + err.message);
  }
};

module.exports = { userAuth };
