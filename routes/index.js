const router = require("express").Router()
const bugRoutes = require("./bugRoutes")
const deviceRoutes = require("./deviceRoutes")
const testerRoutes = require("./testerRoutes")

router.use("/bugs", bugRoutes)
router.use("/devices", deviceRoutes)
router.use("/testers", testerRoutes)

module.exports = router