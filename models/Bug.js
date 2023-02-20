const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bug extends Model {}

Bug.init({

},{
    sequelize
});

module.exports=Bug