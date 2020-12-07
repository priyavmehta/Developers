const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

// @route   Post api/users
// @desc    Register User
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty();
        check('email', 'Please enter a valid Email Address').isEmail()
        check('password', 'Please enter password of minimum 6 characters').isLength({
            min: 6
        })
    ],
    (req, res) => {
    console.log(req.body)
    res.send("User route")
})

module.exports = router