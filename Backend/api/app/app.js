const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./models/User');
const Listing = require('./models/Listing');

app.use(express.json());

app.post('/auth', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

app.post('/accounts', async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.json({ user });
});

app.post('/listings', async (req, res) => {
    const { title, description, price, currency, make, model, year, mileage, condition, location } = req.body;
    const listing = new Listing({ title, description, price, currency, make, model, year, mileage, condition, location });
    await listing.save();
    res.json({ listing });
});

app.get('/listings', async (req, res) => {
    const listings = await Listing.find();
    res.json({ listings });
});

app.use((req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.userId = decoded.userId;
        next();
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});