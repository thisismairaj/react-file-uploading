const { Router } = require("express")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

const profileRouter = Router()

profileRouter.post("/", (req, res) => {
  console.log(req.file)
  res.status(200).json({ ok: "true1" })
})

module.exports = profileRouter
