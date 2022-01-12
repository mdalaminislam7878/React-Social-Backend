const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const passportSetup = require('./passport');
const authRoutes = require('./routes/auth');

// port setup
const port = process.env.PORT || 5000;

app.use(cookieSession({
    name: 'session',
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 1000
}))

app.use(passport.initialize())
app.use(passport.session())

// app.use(
//     cors()
// )
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/', (req, res) => {
    res.json({user: "hello"});
})
app.use('/auth', authRoutes)

app.listen(port, err => {
    console.log("Server is running");
})