const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tester extends Model {}

Tester.init({
    // add properites here, ex:
    firstName: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    lastName: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    country: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    lastLogin: {
         type: DataTypes.STRING,
         allowNull:true,
    }

},{
    sequelize
});

module.exports=Tester