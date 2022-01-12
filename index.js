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

app.use(
    cors()
)


app.get('/', cors(), (req, res) => {
    res.json({user: "hello"});
})
app.use('/auth', cors(), authRoutes)

app.listen(port, err => {
    console.log("Server is running");
})