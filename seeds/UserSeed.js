const { User } = require('../models');

const UserData = [
    {
        username: 'Alik',
        email: 'Alik@gmail.com',
        password: 'Alik1990'
    },
    {
        username: 'Alik2',
        email: 'Alik2@gmail.com',
        password: 'Alik2990'
    },
    {
        username: 'Alik3',
        email: 'Alik3@gmail.com',
        password: 'Alik3990'
    },
    {
        username: 'Alik4',
        email: 'Alik4@gmail.com',
        password: 'Alik4990'
    },
    {
        username: 'Alik5',
        email: 'Alik5@gmail.com',
        password: 'Alik5990'
    },
];

const SeedUsers = () => User.bulkCreate(UserData);

module.exports = SeedUsers;