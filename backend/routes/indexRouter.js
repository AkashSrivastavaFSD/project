var express = require('express');
var router = express.Router();
var userRouter = require('../routes/userRouter.js');
var adminRouter = require('../routes/adminRouter.js');
var {insertData,login} = require('../controllers/usercontroller.js');

router.post("/create",(req,res)=>{
    console.log(req.body);
})


// router.put("/update", updateData);

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/contact', function(req, res) {
    res.render('contact');
});

router.get('/fruits', function(req, res) {
    res.render('fruits');
});

router.get('/testimonial', function(req, res) {
    res.render('testimonial');
});

router.get('/contact', function(req, res) {
    res.render('contact');
});

//router.post('/register',insertData);

router.get('/registration', function(req, res) {
    res.render('registration', { 'msg': '' });
});

router.post('/login', login);

router.get('/login', function(req, res) {
    res.render('login', { 'msg': '' });
});

// User and Admin routes
router.use('/user', userRouter);
router.use('/admin', adminRouter);

module.exports = router;
