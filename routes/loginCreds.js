const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).json({ success: false });
        }

        if (user.password !== password) {
            return res.status(200).json({ success: false });
        }

        res.status(200).json({
            success: true,
            name: user.name
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;

