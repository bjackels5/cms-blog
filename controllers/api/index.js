const router = require('express').Router();
console.log("controllers/api/index.js");
const userRoutes = require('./user-routes');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;