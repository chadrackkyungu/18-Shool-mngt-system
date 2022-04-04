const mongoose = require("mongoose")

const news_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    articleImage: {
      type: String,
      required: true,
    },
    news: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

//! Note: this will be your database name {Articles}
module.exports = mongoose.model("News_Article", news_Schema)
