// const path = require("path")
const router = require("express").Router()
const Articles = require("../DB Models/DB_Models")
const multer = require("multer")

// const img = require("../../public/")

//* THIS CODE HERE IT IS FOR IMAGE UPLOADING
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../public/") //this directory is in react
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

var upload = multer({
  storage: storage,

  // fileFilter: function (req, file, cb) {
  //   if (file.mimetype == "image/jpg" || file.mimetype === "image/jpeg") {
  //     cb(null, true)
  //   } else {
  //     console.log("only jpg & png supported")
  //     cb(null, fab(null, false))
  //   }
  // },

  // limits: { fieldSize: 1024 * 1024 * 3 },
})

//* get All Articles
router.get("/", async (req, res) => {
  Articles.find()
    .then(article => res.json(article))
    .catch(err => {
      res.status(400).json(`Error ${err}`)
    })
})

router.post("/add", upload.single("articleImage"), (req, res) => {
  // router.post("/add", (req, res) => {

  // console.log(res.json())
  // console.log(req.file.originalname)

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

module.exports = router
