const express = require('express');
const adminRouter = express.Router();
const {insertData,login,changePassword,getAllUsers,deleteUser} = require('../controllers/usercontroller.js');


adminRouter.put("/changepassword",changePassword);
// Login Route API
adminRouter.post("/login", login);

// Fetch all users API
adminRouter.get('/manageusers', getAllUsers);

// Delete a user by email API
adminRouter.delete('/manageusers', deleteUser);


// Middleware to check if the user is authenticated
adminRouter.use(function(req, res, next) {
    if (req.session.unm !== undefined && (req.session.role === 'user' || req.session.role === 'admin')) {
        next();
    } else {
        res.redirect('/login');
    }
});

// Protected Routes (only accessible when logged in)
adminRouter.get('/', function(req, res) {
    var user1 = req.session.unm;
    res.render('adminindex', { 'msg': user1 });
});

adminRouter.get('/settings', function(req, res) {
    res.render('Settings');
});

adminRouter.get('/manageusers', function(req, res) {
    res.render('Manageusers');
});


{/*Logout Route
adminRouter.get('/logout', function(req, res, next) {
    res.redirect('/login');
    next();
}); */}

module.exports = adminRouter;
