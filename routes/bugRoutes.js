const router = require("express").Router()
const Bug = require("../models/Bug")

// get all
router.get("/", async (req,res) => {
  try {
    const bugs = Bug.findAll()
    res.status(200).json(bugs)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

// find all bugs by device only
router.get("/bydevice/:deviceId", async (req,res) => {
  try {
    const bugs = Bug.findAll({
      where: {
        deviceId: req.params.deviceId
      }
    })
    res.status(200).json(bugs)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

// find all bugs by device AND tester
router.get("/bytester/:testerId/:deviceId", async (req,res) => {
  try {
    const bugs = Bug.findAll({
      where: {
        deviceId: req.params.deviceId,
        testerId: req.params.testerId
      }
    })
    res.status(200).json(bugs)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

module.exports = router