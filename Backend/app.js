const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/car-listing', { useNewUrlParser: true, useUnifiedTopology: true });

const Listing = require('./models/Listing');
const User = require('./models/User');

app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    try {
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error creating user' });
    }
});

app.post('/auth', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).send({ message: 'Invalid username or password' });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).send({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user.id }, 'ecretkey', { expiresIn: '1h' });
    res.send({ token });
});

app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ message: 'No token provided' });
    }
    jwt.verify(token, 'ecretkey', (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Invalid token' });
        }
        req.userId = decoded.userId;
        next();
    });
});

app.get('/listings', async (req, res) => {
    const listings = await Listing.find();
    res.send(listings);
});

app.post('/listings', async (req, res) => {
    const listing = new Listing(req.body);
    try {
        await listing.save();
        res.status(201).send({ message: 'Listing created successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error creating listing' });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});