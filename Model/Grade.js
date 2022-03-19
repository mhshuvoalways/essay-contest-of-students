const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const gradeSchema = new Schema(
  {
    gradeName: {
      type: String,
      required: true,
    },
    gradeMinValue: {
      type: String,
      required: true,
    },
    gradeMaxValue: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("grade", gradeSchema);
