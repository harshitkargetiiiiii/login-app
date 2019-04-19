var express = require('express');
var router = express.Router();
var JWT = require('jsonwebtoken');
const auth = require('../middleware/auth');

const users = require('../users.json');

router.post('/signin', function (req, res, next) {
    var str = `${req.body.username}`;
    for(var i = 0; i < str.length; i++){
        str = str.replace(' ', '');
    }
    var user;
    var noUser = false;
    if (str && req.body.password) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == str) {
                if (users[i].password == req.body.password) {
                    user = users[i];
                    break;
                } else {
                    noUser = true
                }
            } else {
                noUser = true
            }
        }
        if (user) {
            const token = JWT.sign({ user }, 'secret');
            return res.send({
                success: true,
                token: token
            });
        }
        if (noUser) { return res.send({
            success: false,
            errorMessage: "wrong username/password"
        }) }
    }
});

router.get('/profile', auth, (req,res) => {
    res.json(req.user);
})

module.exports = router;
