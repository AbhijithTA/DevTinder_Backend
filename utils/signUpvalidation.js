const validate = require("validator");

const validation = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Please enter first name and last name");
  }

  if (!validate.isEmail(emailId)) {
    throw new Error("Please enter a valid email");
  }

  if (!validate.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

module.exports = { validation };
