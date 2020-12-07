const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {

    // Get JWT token from the header
    const token = req.header('x-auth-token');

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Verify token
    try{

        const decoded = jwt.verify(token, config.get('jwtSecret'));
        console.log(decoded)
        console.log(req)
        // Get the user related to the token. This user then can be used to get the user profile in future.
        req.user = decoded.user;
        next()

    } catch(err) {
        return res.status(401).json({ msg: "Token is not valid" })
    }

}