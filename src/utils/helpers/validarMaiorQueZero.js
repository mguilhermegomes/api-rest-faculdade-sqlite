const { ValidationError } = require("sequelize");

module.exports = (value, message) => {
  if (parseInt(value) <= 0) {
    throw new ValidationError(message);
  }
};