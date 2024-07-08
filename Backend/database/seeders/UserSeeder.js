const User = require('../models/User');

const users = [
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
    },
    {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: 'password123',
    },
];

async function seedUsers() {
    await User.deleteMany({});
    await User.insertMany(users);
    console.log('Users seeded successfully!');
}

seedUsers();