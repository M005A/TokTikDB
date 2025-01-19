const express = require("express");
const router = express.Router();
const Gif = require("../models/Gifs.js");

// Get all users
router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    const data = await Gif.find({ name: name })
    res.json(data);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Add a user
router.post("/", async (req, res) => {
  const { name, gifData, title } = req.body;

  try {
    const newGif = new Gif({ name, gifData, title, likes:0, dislikes:0});
    await newGif.save();
    res.status(201).json(newGif);
  } catch (err) {
    //res.status(500).send('Server error');
  }
});

module.exports = router;
