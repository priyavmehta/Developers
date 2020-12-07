const { raw } = require('express')
const express = require('express')
const { check, validationResult } = require('express-validator')
const router = express.Router()

const User = require('../../models/User')

// @route   Post api/users
// @desc    Register User
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please enter a valid Email Address').isEmail(),
        check('password', 'Please enter password of minimum 6 characters').isLength({
            min: 6
        })
    ],
    async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() })
    }

    const { name, email, password } = req.body

    try{

    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server Error');
    }

    res.send("User route")
})

module.exports = router