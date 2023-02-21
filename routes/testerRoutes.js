const router = require("express").Router()
const { Model } = require("sequelize")
const {Tester, Device} = require("../models")

// get all
router.get("/", async (req,res) => {
  try {
    const testers = await Tester.findAll({
      include: Device
    })
    res.status(200).json(testers)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})

// get testers by country and device
router.get("/bycountry", async (req,res) => {
  try {
    const testers = await Tester.findAll({
      where: {
        country: req.query.country,
      },
      include: [{model: Device}]
    })
    res.status(200).json(testers)
  } catch (error) {
    console.log(error)
    res.status(500).json({error})
  }
})




module.exports = router