const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Profile = require('../../models/Profile')

// @route   GET api/profile/me
// @desc    Get user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {
    try{

        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
        ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: "There is no profile for this user" })
        }

        return res.json(profile)
    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})

// @route   GET api/profile
// @desc    Create User Profile
// @access  Private
router.post('/me', [ auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('Skills', 'Skills is required').not().isEmpty()
] ], async (req, res) => {
    try{

        
    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})

module.exports = router