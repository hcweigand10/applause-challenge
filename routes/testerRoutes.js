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




module.exports = router