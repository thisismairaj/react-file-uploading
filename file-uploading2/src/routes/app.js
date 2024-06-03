const { Router } = require("express")
const profileRouter = require("./profile-router")

const appRouter = Router()

appRouter.use("/profile", profileRouter)

module.exports = appRouter
