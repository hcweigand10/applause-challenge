const router = require("express").Router()
const Bug = require("../models/Bug")

// get all
router.get("/", async (req,res) => {
  try {
    const bugs = await Bug.findAll()
    res.status(200).json(bugs)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

// Not using
// find all bugs by device only
// ex: /bugs/bydevice?deviceId=3&deviceId=4
router.get("/bydevice", async (req,res) => {
  try {
    const bugs = await Bug.findAll({
      where: {
        deviceId: [...req.query.deviceId].map(deviceId => parseInt(deviceId))
      }
    })
    res.status(200).json(bugs)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

// find count of all bugs by device AND tester
// ex: /bugs/bytester/1/bydevice?deviceId=3&deviceId=4
router.get("/bytester/:testerId/bydevice", async (req,res) => {
  try {
    const bugCount = await Bug.count({
      where: {
        deviceId: [...req.query.deviceId].map(deviceId => parseInt(deviceId)),
        testerId: req.params.testerId
      }
    })
    res.status(200).json({bugCount})
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

module.exports = router