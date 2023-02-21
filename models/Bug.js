const { Model, DataTypes } = require('sequelize');
const Device = require("./Device")
const Tester = require("./Tester")
const sequelize = require('../config/connection');

class Bug extends Model {}

Bug.init({

},{
    sequelize,
    timestamps: false
});

module.exports=Bug