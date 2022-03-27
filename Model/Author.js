const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const authorSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    bookName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("author", authorSchema);
