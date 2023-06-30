const express= require("express")
const router = express.Router()
const path = require("path")
const logger= require("../services/logger")
const routerHandler= require("../control/routeHandler")
const logEvents= require("../middlerware/logger")
// logger.error(new Error("error") )

router.get("^/$|index(.html)?",routerHandler.get)

module.exports = router