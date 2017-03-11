//  Dependancies
const express   = require('express');
const router    = express.Router();

const demo  = 'Demo route :'; 

//  Dummy routes
router.get('/register', (req, res, next) => {
    res
        .send(`${demo} /users/register`);
});
router.get('/authenticate', (req, res, next) => {
    res
        .send(`${demo} /users/authenticate`);
});
router.get('/login', (req, res, next) => {
    res
        .send(`${demo} /users/login`);
});


//  Export the module
module.exports = router;