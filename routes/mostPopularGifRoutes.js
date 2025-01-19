const express = require("express");
const router = express.Router();
const Gif = require("../models/Gifs.js");

// Get all users
router.get("/", async (req, res) => {
  const { index } = req.query;

  try {
    const data = await Gif.find().sort({likes: -1})
    res.json(data[index]);
  } catch (err) {
    res.status(500).send("Server error");
  }
});