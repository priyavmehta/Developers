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
});

// @route   GET api/profile
// @desc    Create and Update User Profile
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
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;

    if (skills) {
        profileFields.skills = skills.split(',').map(skill => skill.trim())
    }

    profileFields.social = {}
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try{

        profile = await Profile.findOne({ user: req.user.id})

        if (profile) {

            // Profile exists. In that case we need to update the profile.
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            )

            return res.json(profile);
        }

        // Profile not found. In that case, we will create a new profile.
        profile = new Profile(profileFields)
        await profile.save()
        return res.json(profile);
        
    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// @route   GET api/profile/
// @desc    Get all profiles
// @access  Public
router.get('/', async (req, res) => {
    try{

        const profiles = await Profile.find().populate('user',
        ['name', 'avatar']);

        return res.json(profiles);

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile of a particular user.
// @access  Public
router.get('/user/:user_id', async (req, res) => {
    try{

        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user',
        ['name', 'avatar']);

        if(!profile) return res.status(400).json({msg: "Profile not found"})

        return res.json(profile);
        
    } catch(err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({msg: "Profile not found"})
        }
        return res.status(500).send("Server error");
    }
});


module.exports = router