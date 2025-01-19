const express = require("express");
const router = express.Router();
const Gif = require("../models/Gifs.js");

// Get all users
router.get("/", async (req, res) => {
  const { index } = req.query;

  try {
    const data = await Gif.find()
    if (index > data.length) {
        res.json(data[data.length - 1])
    }
    res.json(data[index]);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Add a user
router.post("/", async (req, res) => {
  const { name, gifData } = req.body;

  try {
    const newGif = new Gif({ name, gifData });
    await newGif.save();
    res.status(201).json(newGif);
  } catch (err) {
    //res.status(500).send('Server error');
  }
});

module.exports = router;
