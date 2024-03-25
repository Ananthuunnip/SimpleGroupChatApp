const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.send(`<html>
        <form  action="/login"
        onsubmit="localStorage.setItem('username', document.getElementById('username').value)"
         method ="POST">
        <label> YOUR NAME : </lable>
        <input  id="username" type="text" name="uname">
        <button type = "submit">LOGIN</button>
        </form></html>`);
});

router.post(`/login`,(req, res, next) => {
    res.redirect(`/user`);
});
module.exports = router;