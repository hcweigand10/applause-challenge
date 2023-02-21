const { Model, DataTypes } = require('sequelize');
const Device = require("./Device")
const Tester = require("./Tester")
const sequelize = require('../config/connection');

class Bug extends Model {}

Bug.init({
  // deviceId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: Device,
  //     key: "deviceId"
  //   }
  // },
  // testerId: {
  //   type: DataTypes.INTEGER,
  //   references: Tester,
  //   key: "testerId"
  // }

},{
    sequelize,
    timestamps: false
});

module.exports=Bug