const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const isPaySubmitSchema = new Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    isPayment: {
      type: Boolean,
      default: false,
    },
    submissionCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("ispaysubmit", isPaySubmitSchema);
