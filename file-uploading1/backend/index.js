const express = require("express")
const morgan = require("morgan")
const appRouter = require("./app.js")
const cors = require("cors")

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use("/api/v1/", appRouter)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
