const { Comment } = require('../models');

const CommentData = [
    {
        comment_text: "Soredemo Sekai wa Utsukushii was first published as a one-shot in the same magazine in 2009",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Soredemo Sekai wa Utsukushii was first published as a one-shot in the same magazine in 2009",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Soredemo Sekai wa Utsukushii was first published as a one-shot in the same magazine in 2009",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Soredemo Sekai wa Utsukushii was first published as a one-shot in the same magazine in 2009",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Soredemo Sekai wa Utsukushii was first published as a one-shot in the same magazine in 2009",
        user_id: 4,
        post_id: 4
    }
];

const SeedComment = () => Comment.bulkCreate(CommentData);

module.exports = SeedComment;