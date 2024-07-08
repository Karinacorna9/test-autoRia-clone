const Listing = require('../models/Listing');

const listings = [
    {
        make: 'Toyota',
        model: 'Corolla',
        year: 2015,
        price: 15000,
        region: 'New York',
    },
    {
        make: 'Honda',
        model: 'Civic',
        year: 2018,
        price: 20000,
        region: 'California',
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: 2012,
        price: 10000,
        region: 'Florida',
    },
];

async function seedListings() {
    await Listing.deleteMany({});
    await Listing.insertMany(listings);
    console.log('Listings seeded successfully!');
}

seedListings();