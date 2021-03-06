const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const cookieSession = require('cookie-session');
const passport = require('passport');
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



app.get('/', (req, res) => {
    res.status(200).json({user: true});
})
app.use('/auth', authRoutes)

app.listen(port, err => {
    console.log("Server is running");
})