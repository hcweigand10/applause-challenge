const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Device extends Model {}

Device.init({
    description: {
         type: DataTypes.STRING,
         allowNull:false,
    }
},{
    sequelize,
    timestamps: false
});

module.exports=Device