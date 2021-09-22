const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// /dashboard
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
        attributes: Post.postAttributes,
        include: Post.postInclude
    })
        .then(dbData => {
            //serialize the data before passing to template
            const posts = dbData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/new-post', (req, res) => {
    if (req.session.loggedIn) {
        res.render('new-post', { loggedIn: true} );
        return;
    }
    else {
        res.redirect('/');
    }
});

// /dashboard/edit/:id

// router.get('/edit/:id', withAuth, (req, res) => {
//     Post.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: Post.postAttributes,
//         include: Post.postInclude
//     })
//         .then(dbData => {
//             if (!dbData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }
//             const post = dbData.get({ plain: true });
//             res.render('edit-post', { post, loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });

// });

module.exports = router;
