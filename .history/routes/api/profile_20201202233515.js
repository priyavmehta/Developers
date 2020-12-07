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
router.post('/', [ auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills are required').not().isEmpty()
] ], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() })
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body

    // Build the Profile Object
    const profileFields = {}
    profileFields.user = req.user.id

    if (company) profileFields.company = company;
    if (website) profileFields.company = website;
    if (location) profileFields.company = location;
    if (bio) profileFields.company = bio;
    if (status) profileFields.company = status;
    if (githubusername) profileFields.company = githubusername;

    if (skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim())
    }

    console.log(profileFields.skills);
    return res.send("Profile values recieved");
    
    try{

        
    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
})

module.exports = router