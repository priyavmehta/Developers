const express = require('express');
const { check, validationResult, body } = require('express-validator')
const router = express.Router()
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   PODT api/posts
// @desc    Create a Post
// @access  Private
router.post('/', [ auth, [
    check('text', 'Post content is required').not().isEmpty()
] ], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() })
    }


    try{

        const user = await User.findById(req.user.id).select('-password');

        const newPost = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        }
        
        const post = new Post(newPost);
        await post.save();
        return res.json(post);
        
    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get('/', auth, async (req, res) => {
    try{

        const posts = await Post.find().sort({ date: -1 });
        
        return res.json(posts);

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

module.exports = router