// database/index.js
const mongoose = require('mongoose');

// Database connection URL
const DB_URL = 'ongodb://localhost:27017/auto-ria';

// JWT secret key (replace with your own secret key)
const JWT_SECRET = 'IxjKSym3yV2OPKSn2o+ffSa70HYlA5gETrg4ZR/YFqM=';

// Car schema
const carSchema = new mongoose.Schema({
    Марка: String,
    Модель: String,
    Розширений_пошук: String,
    Регіон: String,
    Рік_випуску: Number,
    Ціна: Number
});

// Car model
const Car = mongoose.model('Car', carSchema);

// Connect to the database
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Error connecting to the database:', err));

// Export the Car model
module.exports = { Car, JWT_SECRET };