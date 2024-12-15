const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const searchRoutes = require('./routes/searchRoutes');
const listRoutes = require('./routes/listRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.get('/', (req,res) => {
    res.send('Welcome to Netflix Clone api!');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/lists', listRoutes);

// const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log('Server running on port 5000'));
