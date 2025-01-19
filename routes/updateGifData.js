const express = require("express");
const router = express.Router();
const Gif = require("../models/Gifs.js");

router.post("/", async (req, res) => {
  const { name, isLike } = req.body;
    console.log(name, isLike)
  if (isLike) {
    await Gif.findOneAndUpdate({ name: name }, { $inc: { likes: 1 } });
  } else {
    await Gif.findOneAndUpdate({ name: name }, { $inc: { dislikes: 1 } });
  }

  res.status(200).send({ success: true });
});

router.get("/", async (req, res) => {
  const { name, isLike } = req.query;
  console.log(name);
  try {
    const gif = await Gif.findOne({ name: name });

    res.json({
      likes: gif.likes,
      dislikes: gif.dislikes,
    });
  } catch (err) {}
});

module.exports = router;
