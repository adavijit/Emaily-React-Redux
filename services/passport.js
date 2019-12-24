const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
    .then(user=>{
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID : keys.GoogleClientID,
    clientSecret : keys.GoogleClientSecret,
    callbackURL : 'http://localhost:5000/auth/google/callback'

},
async (accesstoken,refreshToken,profile,done)=>{
    const existingUser=await User.findOne({ googleId : profile.id })
        if(existingUser)
        return done(null,existingUser)

        const user = new User({ googleId : profile.id }).save()
        done(null,user)
}
))