const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const awardSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    awardName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("award", awardSchema);
