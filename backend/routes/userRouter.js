const express = require('express');
const userRouter = express.Router();
const {insertData,login,changePassword} = require('../controllers/usercontroller.js');


// Registration Route API
userRouter.post('/create', insertData);
// Login Route API
userRouter.post("/login", login);

userRouter.put("/changepassword",changePassword);

// Middleware to check if the user is authenticated
userRouter.use(function(req, res, next) {
    if (req.session.unm !== undefined && (req.session.role === 'user' || req.session.role === 'admin')) {
        next();
    } else {
        res.redirect('/login');
    }
});

// Protected Routes (only accessible when logged in)
userRouter.get('/', function(req, res) {
    var user1 = req.session.unm;
    res.render('userindex', { 'msg': user1 });
});

userRouter.get('/fruits', function(req, res) {
    res.render('Fruits');
});

userRouter.get('/about', function(req, res) {
    res.render('About');
});

userRouter.get('/contact', function(req, res) {
    res.render('Contact Us');
});
userRouter.get('/settings', function(req, res) {
    res.render('Settings');
});
{/*Logout Route
userRouter.get('/logout', function(req, res, next) {
    res.redirect('/login');
    next();
}); */}

module.exports = userRouter;
