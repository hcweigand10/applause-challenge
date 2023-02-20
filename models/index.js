const Tester = require("./Tester")
const Bug = require("./Bug")
const Device = require("./Device")

Tester.hasMany(Device)
Device.belongsToMany(Tester)

Tester.hasMany(Bug)
Bug.belongsTo(Tester)

Device.hasMany(Bug)
Bug.belongsTo(Device)

module.exports = {Tester, Device, Bug}