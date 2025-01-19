const express = require('express');
const router = express.Router();
const Gif = require('../models/Gifs.js');

// Get all users
router.get('/', async (req, res) => {
    try {
        const gifs = await Gif.find();
        res.json(gifs);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add a user
router.post('/', async (req, res) => {
    const { name, data } = req.body;

    try {
        const newGif = new Gif({ name, data });
        await newGif.save();
        res.status(201).json(newGif);
    } catch (err) {
        //res.status(500).send('Server error');
    }
});



module.exports = router;
