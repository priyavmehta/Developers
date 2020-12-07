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

        let user = User.findOne({ email: email })
        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] })
        }
        res.send("User route")

    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }

    
})

module.exports = router