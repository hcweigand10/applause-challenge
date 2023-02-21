const Tester = require("./Tester")
const Bug = require("./Bug")
const Device = require("./Device")
const TesterDevice = require("./TesterDevice")

Tester.belongsToMany(Device, {
  through: TesterDevice
})
Device.belongsToMany(Tester, {
  through: TesterDevice
})

Tester.hasMany(Bug)
Bug.belongsTo(Tester)

Device.hasMany(Bug)
Bug.belongsTo(Device)

module.exports = {Tester, Device, Bug, TesterDevice}