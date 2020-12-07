const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

// @route   GET api/auth
// @desc    Test
// @access  Public
router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }
    res.send("Auth route")
});

// @route   Post api/auth
// @desc    Authenticate and get token from user
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

            // Check if user exists
            let user = await User.findOne({ email: email })
            if (user) {
                return res.status(400).json({ errors: [{ msg: "User already exists" }] })
            }

            // Get the user gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            // Make the user model
            user = new User({
                name,
                email,
                avatar,
                password
            });

            // Encrypt the password and save it in the user model
            salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)

            // Save the user info in the database.
            await user.save()

            // Generating the web token based on the user id
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token: token })
                }
            );

        } catch(err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }

    }
)

module.exports = router