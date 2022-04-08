const SeedUsers = require('./UserSeed');
const SeedComment = require('./CommentSeed');
const SeedPosts = require('./PostSeed');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await SeedUsers();
    await SeedPosts();
    await SeedComment();
    console.log(`All Done!`)
    process.exit(0);
};

seedAll();