const express = require('express');
const router = express.Router();
const userctrl = require('../controllers/user');

router.post('/login',userctrl.login);
router.post('/signup',userctrl.signup);
router.get('/googlelogin',(req,res,next)=>{
    console.log("googlelogin");
})
router.get('/facebooklogin',(req,res,next)=>{
    console.log("facebooklogin");
})

module.exports = router;