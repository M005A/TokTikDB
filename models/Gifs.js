const mongoose = require("mongoose");

const gifSchema = new mongoose.Schema({
  name: String,
  gifData: String, // Store as a buffer (binary data)
});

module.exports = mongoose.model("Gifs", gifSchema);
