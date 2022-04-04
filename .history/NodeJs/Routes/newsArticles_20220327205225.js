const router = require("express").Router()
const Articles = require("../DB Models/DB_Models")
const multer = require("multer")

//THIS CODE HERE IT IS FOR IMAGE UPLOADING
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../react-js/public/uploads/") //this directory is in react
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

//* get All Articles
router.get("/", async (req, res) => {
  Articles.find()
    .then(article => res.json(article))
    .catch(err => {
      res.status(400).json(`Error ${err}`)
    })
})

//* Post Article
//=> upload.single("articleImage"), this is for the image upload, f u are not working with image u can delete it
router.post("/add", upload.single("articleImage"), (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    category: req.body.category,
    news: req.body.news,
    articleImage: req.file.originalname,
  })

  newArticle
    .save()
    .then(() => res.json("New Article posted successfuly!"))
    .catch(err => {
      res.status(400).json(`Error : ${err}`)
    })
})

//* Get article by ID
router.get("/:id", async (req, res) => {
  Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error ${err}`))
})

//* Get Article by ID & update
router.put("/update/:id", upload.single("articleImage"), (req, res) => {
  Articles.findById(req.params.id)
    .then(article => {
      article.title = req.body.title
      article.authorname = req.body.authorname
      article.category = req.body.category
      article.article = req.body.article
      article.articleImage = req.file.originalname

      article
        .save()
        .then(() => res.json("Article updated successfully!"))
        .catch(err => res.status(400).json(`Error ${err}`))
    })
    .catch(err => res.status(400).json(`Error ${err}`))
})

//* Delete Articles
router.delete("/:id", async (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted successfully!"))
    .catch(err => res.status(400).json(`Error ${err}`))
})

module.exports = router
