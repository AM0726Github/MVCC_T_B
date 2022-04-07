const router = require('express').Router();
const UserRoutes = require('./user-routes');
const PostRoutes = require('./post-routes');
const CommentRoutes = require('./comment-routes');

router.use('/users', UserRoutes);
router.use('/posts', PostRoutes);
router.use('/comments', CommentRoutes);

module.exports = router;