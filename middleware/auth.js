const Jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(400).send('no token provided');
    try {
        var decoded = Jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch {
        res.status(400).send('invalid token');
    }
}