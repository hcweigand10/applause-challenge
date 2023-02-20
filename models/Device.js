const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Device extends Model {}

Device.init({
    // add properites here, ex:
    description: {
         type: DataTypes.STRING,
         allowNull:false,
    }
},{
    sequelize
});

module.exports=Device