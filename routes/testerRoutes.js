const router = require("express").Router()
const {Tester, Device} = require("../models")

// get all
router.get("/", async (req,res) => {
  try {
    const testers = Tester.findAll({
      include: Device
    })
    res.status(200).json(testers)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

// get all testers 
router.get("/bydevice", async (req,res) => {
  console.log(req.query)
  try {
    const testers = Tester.findAll()
    res.status(200).json(testers)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})


module.exports = router