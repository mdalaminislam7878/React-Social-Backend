const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

//google information
const GOOGLE_CLIENT_ID = "1023225750460-ae6f8dvj1v22b9qup3haqv6tfqpm5opg.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

//github information
const GITHUB_CLIENT_ID = "f27a24af20dec9fffeae";
const GITHUB_CLIENT_SECRET = "b76cef3a8148326c7cdf70383cfeeec12e5954ec";

//facebook imformation
const FACEBOOK_APP_ID = "608782863565128";
const FACEBOOK_APP_SECRET = "8d43c57a609347f7a9fa939f3a3d4f3e";

// google strategy
passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

// github strategy
passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

//facebook strategy
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
    done(null, profile)
}
));



passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})