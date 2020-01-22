const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
    sign,
    signup,
    signin,
    isAuthenticated
}

function sign(req, res){
    console.log(req);
    if (req.body.full_name === ''){
        console.log('sign in');
        signin(req, res);
    } else {
        console.log('sign up');
        signup(req, res);
    }
}

async function signup(req, res){
    let user = User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({token, user});
    } catch (err){
        res.status(400).json(err);
    }
}

async function signin(req, res){
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) return res.status(401).json({err: 'Bad Credentials'});
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return res.status(401).json({err});
            if (isMatch){
                const token = createJWT(user);
                res.json({token});
            }
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}

function createJWT(user){
    return jwt.sign({user}, SECRET, {expiresIn: '24h'});
}

function isAuthenticated(req, res, next){
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized, Please sign in.'});
}