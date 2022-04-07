const { Post } = require('../models');

const PostData = [
    {
        title: 'This World is Beautyful',
        content: 'he World Is Still Beautiful is a Japanese manga series written and illustrated by Dai Shiina. It was serialized in Hakusensha',
        user_id: 1

    },
    {
        title: 'This World is Beautyful',
        content: 'he World Is Still Beautiful is a Japanese manga series written and illustrated by Dai Shiina. It was serialized in Hakusensha',
        user_id: 1
    },
    {
        title: 'This World is Beautyful',
        content: 'he World Is Still Beautiful is a Japanese manga series written and illustrated by Dai Shiina. It was serialized in Hakusensha',
        user_id: 2
    },
    {
        title: 'This World is Beautyful',
        content: 'he World Is Still Beautiful is a Japanese manga series written and illustrated by Dai Shiina. It was serialized in Hakusensha',
        user_id: 3

    },
    {
        title: 'This World is Beautyful',
        content: 'he World Is Still Beautiful is a Japanese manga series written and illustrated by Dai Shiina. It was serialized in Hakusensha',
        user_id: 4
    }
];

const SeedPosts = () => Post.bulkCreate(PostData);

module.exports = SeedPosts;