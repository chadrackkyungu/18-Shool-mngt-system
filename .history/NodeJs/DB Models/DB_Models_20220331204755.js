const mongoose = require("mongoose")
const news_Schema = new mongoose.Schema(
  {
    // title: {
    //   type: String,
    //   required: true,
    // },
    // category: {
    //   type: String,
    //   required: true,
    // },
    // news: {
    //   type: String,
    //   required: true,
    // },
    articleImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

//* this {News_Article} will be the File name of ur Database file
module.exports = mongoose.model("News_Article", news_Schema)
