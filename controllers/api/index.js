const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const PostRoutes = require('./PosRoutes');
const CommentRoutes = require('./CommentRoutes');

router.use('/users', UserRoutes);
router.use('/posts', PostRoutes);
router.use('/comments', CommentRoutes);

module.exports = router;