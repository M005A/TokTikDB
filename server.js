const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Load Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const gifRoutes = require('./routes/gifRoutes');
app.use('/api/gifs', gifRoutes);

const gifIndexRoutes = require('./routes/gifIndexRoutes');
app.use('/api/gifs/index', gifIndexRoutes);

const loginRoutes = require('./routes/loginCreds');
app.use('/api/login', loginRoutes);

const mostPopularGifs = require('./routes/mostPopularGifRoutes');
app.use('/api/gifs/mostpopular', mostPopularGifs);
const updateGifData = require('./routes/updateGifData');
app.use('/api/gifs/likedislike', updateGifData);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
