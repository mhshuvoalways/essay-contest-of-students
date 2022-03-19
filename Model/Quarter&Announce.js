const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const quarterAnnounce = new Schema(
  {
    quarterly: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    toggleStartStop: {
      type: Boolean,
      default: false,
    },
    isAnnounce: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("quarterannounce", quarterAnnounce);
