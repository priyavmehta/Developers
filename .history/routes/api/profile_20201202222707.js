const express = require('express')
const router = express.Router()

// @route   GET api/profile/me
// @desc    Get user's profile
// @access  Public
router.get('/', (req, res) => {
    res.send("Profile route")
})

module.exports = router