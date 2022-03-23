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
    },
    avgMarks: [
      {
        author: {
          type: mongoose.Types.ObjectId,
          ref: "adminuser",
        },
        marks: Number,
      },
    ],
    finalAvg: {
      type: Number,
      default: 0,
    },
    finalMarks: {
      type: Number,
      default: 0,
    },
    grade: {
      type: String,
    },
    sharedLinks: [
      {
        link: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("articles", articlesSchema);
