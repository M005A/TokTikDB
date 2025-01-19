const mongoose = require("mongoose");

const gifSchema = new mongoose.Schema({
  name: String,
  gifData: Buffer, // Store as a buffer (binary data)
});

module.exports = mongoose.model("Gifs", gifSchema);
