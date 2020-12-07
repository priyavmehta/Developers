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

// @route   GET api/profile
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

// @route   DELETE api/profile
// @desc    Delete profile, user and its posts
// @access  Private
router.delete('/', auth, async (req, res) => {
    try{

        await Profile.findOneAndRemove({ user: req.user.id })
        await User.findOneAndRemove({ _id: req.user.id});

        return res.json({ msg: "User Deleted" });

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// @route   PUT api/profile/experience
// @desc    Add Profile experience
// @access  Private
router.put('/experience', [ auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty(),
] ], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() })
    }

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body

    const newExp = {
        title: title,
        company: company,
        location: location,
        from: from,
        to: to,
        current: current,
        description: description
    }

    try{

        const profile = await Profile.findOne({ user: req.user.id })
        profile.experience.unshift(newExp);
        await profile.save()

        return res.json(profile)

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete('/experience/:exp_id', auth, async (req, res) => {
    try{

        const profile = await Profile.findOne({ user: req.user.id })
        
        // Get remove index
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex, 1);
        await profile.save();

        return res.json(profile);

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// @route   PUT api/profile/education
// @desc    Add Profile education
// @access  Private
router.put('/education', [ auth, [
    check('school', 'School is required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty(),
    check('fieldofstudy', 'Field of Study is required').not().isEmpty(),
    check('from', 'From date is required').not().isEmpty(),
] ], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() })
    }

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = req.body

    const newEdu = {
        school: school,
        degree: degree,
        fieldofstudy: fieldofstudy,
        from: from,
        to: to,
        current: current,
        description: description
    }

    try{

        const profile = await Profile.findOne({ user: req.user.id })
        profile.education.unshift(newEdu);
        await profile.save()

        return res.json(profile)

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete('/education/:edu_id', auth, async (req, res) => {
    try{

        const profile = await Profile.findOne({ user: req.user.id })
        
        // Get remove index
        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);
        console.log(removeIndex);
        profile.education.splice(removeIndex, 1);
        await profile.save();

        return res.json(profile);

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

// {
//     "current": true,
//     "_id": "5fc896aeb472cc47d49ac18a",
//     "school": "SPIT College",
//     "degree": "B. Tech",
//     "fieldofstudy": "Science",
//     "from": "2018-06-05T18:30:00.000Z",
//     "description": "B. Tech in Computer Science"
// },
// {
//     "current": false,
//     "_id": "5fc89682b472cc47d49ac189",
//     "school": "PACE College",
//     "degree": "HSC",
//     "fieldofstudy": "Science",
//     "from": "2016-06-05T18:30:00.000Z",
//     "to": "2018-01-04T18:30:00.000Z",
//     "description": "!2th std HSC Board"
// },
// {
//     "current": false,
//     "_id": "5fc8963eb472cc47d49ac188",
//     "school": "OLN high School",
//     "degree": "SSC",
//     "fieldofstudy": "All subjects",
//     "from": "2006-01-11T18:30:00.000Z",
//     "to": "2016-01-04T18:30:00.000Z",
//     "description": "Taught Maths subject to 8th, 9th and 10th std."
// }

module.exports = router