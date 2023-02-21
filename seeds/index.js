const {Device, Bug, Tester, TesterDevice} = require("../models")
const sequelize = require('../config/connection');
const testerData = require("./testerData.json")
const bugData = require("./bugData.json")
const deviceData = require("./deviceData.json")
const testerDeviceData = require("./tester_device.json")


const init = async () => {
  try {
    // sync creates tables based on models
    const sync = await sequelize.sync({ force: true })
    const testersRes = await Tester.bulkCreate(testerData)
    console.log("Testers seeded")
    const devicesRes = await Device.bulkCreate(deviceData)
    console.log("Devices seeded")
    const bugsRes = await Bug.bulkCreate(bugData)
    console.log("Bugs seeded")
    const testerDevicesRes = await TesterDevice.bulkCreate(testerDeviceData)
    console.log("Tester_Devices seeded")
    console.log("==============")
    console.log("Seeding complete")
  } catch (error) {
    console.log(error)
  }
}

init()