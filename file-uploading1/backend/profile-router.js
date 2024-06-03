const { Router } = require("express")
const fileUpload = require("express-fileupload")
const path = require("path")

const assetsFolder = path.join(__dirname, "assets")

const profileRouter = Router()
profileRouter.use(fileUpload())

profileRouter.post("/", (req, res) => {
  const { avatar } = req.files
  try {
    avatar.mv(path.join(assetsFolder, avatar.name))
    res.status(200).json({ message: "file uploaded" })
  } catch (err) {
    console.error({ error: err.message })
  }
})

module.exports = profileRouter
