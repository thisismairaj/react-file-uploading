const { Router } = require("express")
const profileRouter = require("./profile-router.js")

const appRouter = Router()

appRouter.use("/profile", profileRouter)

module.exports = appRouter
