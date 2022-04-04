const path = require("path")
const router = require("express").Router()
const Articles = require("../DB Models/DB_Models")

//* get All Articles
router.get("/", async (req, res) => {
  Articles.find()
    .then(article => res.json(article))
    .catch(err => {
      res.status(400).json(`Error ${err}`)
    })
})

router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    category: req.body.category,
    news: req.body.news,
    articleImage: req.body.articleImage,
  })
  newArticle
    .save()
    .then(() => res.json("New Article posted successfuly!"))
    .catch(err => {
      res.status(400).json(`Error : ${err}`)
    })
  console.log("image upload")
})

module.exports = router
