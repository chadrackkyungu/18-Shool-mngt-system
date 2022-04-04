//imports
require("dotenv").config()
const express = require("express")
const app = express()

const cors = require("cors")

//* => middleware
app.use(cors())
app.use(express.json())

//* MongoDB
require("./MongoDB_conn")
const PORT = process.env.PORT || 4000

//* All Routes
const newsArticles = require("./Routes/newsArticles")
app.use("/api", newsArticles)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
