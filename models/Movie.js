const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    trailer: {
      type: String,
    },
    video: {
      type: String,
    },
    genre: {
      type: String,
    },
    year: {
      type: String,
    },
    limit: {
      type: Number,
    },
    isSeries: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
