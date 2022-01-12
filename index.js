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
    cors({
        origin: "https://mdalaminislam7878-social-app.netlify.app/",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    })
)
app.get('/', (req, res) => {
    res.json({user: "hello"});
})
app.use('/auth', authRoutes)

app.listen(port, err => {
    console.log("Server is running");
})