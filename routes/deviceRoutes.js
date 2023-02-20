const router = require("express").Router()
const Device = require("../models/Device")

// get all
router.get("/", async (req,res) => {
  try {
    const devices = Device.findAll()
    res.status(200).json(devices)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

module.exports = router