const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TesterDevice extends Model {}

TesterDevice.init(
  {

  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = TesterDevice;
