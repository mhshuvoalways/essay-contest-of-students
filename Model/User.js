const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      min: 4,
      max: 20,
    },
    country: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      max: 20,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isPayment: {
      type: Boolean,
      default: false,
    },
    submissionCount: {
      type: Number,
      default: 3,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
