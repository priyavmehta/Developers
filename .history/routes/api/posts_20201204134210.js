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

// @route   GET api/posts/:post_id
// @desc    Get the specified post
// @access  Private
router.get('/:post_id', auth, async (req, res) => {
    try{

        const post = await Post.findById(req.params.post_id);
        
        if (!post) {
            return res.status(404).json({ 'msg': "No Post available for this Id" })
        }
        
        return res.json(post);

    } catch(err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ 'msg': "No Post available for this Id" })
        }

        return res.status(500).send("Server error");
    }
});

// @route   DELETE api/posts/:post_id
// @desc    Delete the specified post
// @access  Private
router.delete('/:post_id', auth, async (req, res) => {
    try{

        const post = await Post.findById(req.params.post_id);
        
        if (!post) {
            return res.status(404).json({ 'msg': "Post Not available" })
        }
        
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ 'msg': "User not authorized" });
        }

        await post.remove();
        return res.json({ 'msg': "Post Deleted" });

    } catch(err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ 'msg': "Post Not available" })
        }

        return res.status(500).send("Server error");
    }
});

// @route   PUT api/posts/like/:post_id
// @desc    Delete the specified post
// @access  Private
router.put('/like/:post_id', auth, async (req, res) => {
    try{

        const post = await Post.findById(req.params.post_id);
        
        if (!post) {
            return res.status(404).json({ 'msg': "Post Not available" })
        }
        
        // Check if user has already liked the post
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(401).json({ 'msg': "Post Already liked" });
        }

        post.likes.unshift({ user: req.user.id });
        await post.save();

        return res.json(post.likes);

    } catch(err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ 'msg': "Post Not available" })
        }

        return res.status(500).send("Server error");
    }
});

// @route   PUT api/posts/unlike/:post_id
// @desc    Delete the specified post
// @access  Private
router.put('/unlike/:post_id', auth, async (req, res) => {
    try{

        const post = await Post.findById(req.params.post_id);
        
        if (!post) {
            return res.status(404).json({ 'msg': "Post Not available" })
        }
        
        // Check if user has not liked the post
        if (post.likes.filter(like => like.user.toString() === req.user.id).length == 0) {
            return res.status(401).json({ 'msg': "Post is not liked yet liked" });
        }

        // Get the remove Index
        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);
        post.likes.splice(removeIndex, 1);
        await post.save();

        return res.json(post.likes);

    } catch(err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ 'msg': "Post Not available" })
        }

        return res.status(500).send("Server error");
    }
});

// @route   PODT api/posts/comment/:post_id
// @desc    Add a comment to the post.
// @access  Private
router.post('/posts/comment/:post_id', [ auth, [
    check('text', 'Comment content is required').not().isEmpty()
] ], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() })
    }

    try{

        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.psot_id);

        if (!post) {
            return res.status(404).json({ 'msg': "Post Not available" })
        }

        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        }
        
        post.comments.unshift(newComment);
        await post.save();
        return res.json(post.comments);
        
    } catch(err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ 'msg': "Post Not available" })
        }
        
        return res.status(500).send("Server error");
    }
});
module.exports = router