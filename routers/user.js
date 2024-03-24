const express = require('express');
// const data = require('./data')
const fs = require('fs');

const router = express.Router();

const data = []
router.get('/user', (req, res,next)=>{  
    res.send(`
    <html><head><title>Instagram</title></head>
        <body><form action="/user" onsubmit="document.getElementById('username').value = localStorage.getItem('username');" method="POST">
                <label>Group chat - ${data}</label><br>
                <input type="text" name="message" required>
                <input type="hidden" id="username" name="username"> <!-- Corrected name attribute to "username" -->
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>`);

});
router.post(`/user`,(req, res, next) => {
    data.push(`${req.body.username}:${req.body.message}`)
    res.redirect(`/user`)    
})
module.exports = router;

