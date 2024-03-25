const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRouters = require('./routers/login');
const userRouters = require('./routers/user');

app.use(bodyParser.urlencoded({exteded : true}));
app.use(loginRouters);
app.use(userRouters);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
