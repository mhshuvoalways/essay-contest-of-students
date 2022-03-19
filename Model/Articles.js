const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const articlesSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    language: {
      type: String,
      required: true,
    },
    typeofArticle: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    qya: {
      quarterly: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
      isAnnounce: {
        type: Boolean,
        required: false,
      },
    },
    marks: {
      type: Number,
      default: 0,
    },
    grade: {
      type: String,
    },
    sharedLinks: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("articles", articlesSchema);
