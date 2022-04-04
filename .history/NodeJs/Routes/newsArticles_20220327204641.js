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
    articleImage: req.file.originalname,
    news: req.body.news,
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

module.exports = router
