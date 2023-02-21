const {Device, Bug, Tester, TesterDevice} = require("../models")
const testerData = require("./testerData.json")
const bugData = require("./bugData.json")
const deviceData = require("./deviceData.json")
const testerDeviceData = require("./tester_device.json")


const init = async () => {
  try {
    const testers = await Tester.bulkCreate(testerData)
    console.log("Testers seeded")
    const devices = await Device.bulkCreate(deviceData)
    console.log("Devices seeded")
    const bugs = await Bug.bulkCreate(bugData)
    console.log("Bugs seeded")
    const testerDevices = await TesterDevice.bulkCreate(testerDeviceData)
    console.log("Tester_Devices seeded")
    console.log("==============")
    console.log("Seeding complete")
  } catch (error) {
    console.log(error)
  }
}

init()