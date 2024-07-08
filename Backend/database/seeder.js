// database/seeder.js
const mongoose = require('mongoose');
const { Car } = require('./index');

// Seed data for cars
const cars = [
    {
        Марка: 'Toyota',
        Модель: 'Corolla',
        Розширений_пошук: ' Sedan',
        Регіон: 'Київ',
        Рік_випуску: 2015,
        Ціна: 15000
    },
    {
        Марка: 'Honda',
        Модель: 'Civic',
        Розширений_пошук: ' Hatchback',
        Регіон: 'Львів',
        Рік_випуску: 2018,
        Ціна: 20000
    },
    {
        Марка: 'Volkswagen',
        Модель: 'Golf',
        Розширений_пошук: ' Hatchback',
        Регіон: 'Одеса',
        Рік_випуску: 2012,
        Ціна: 12000
    },
    {
        Марка: 'Ford',
        Модель: 'Focus',
        Розширений_пошук: ' Sedan',
        Регіон: 'Харків',
        Рік_випуску: 2016,
        Ціна: 18000
    },
    // Add more seed data as needed
];

// Connect to the database
mongoose.connect('mongodb://localhost:27017/auto-ria', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Error connecting to the database:', err));

// Seed the database with cars
Car.insertMany(cars)
    .then(() => console.log('Cars seeded successfully'))
    .catch((err) => console.error('Error seeding cars:', err));

// Close the database connection
mongoose.connection.close();