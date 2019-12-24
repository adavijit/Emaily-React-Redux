const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')


mongoose
.connect('mongodb://localhost/testdb', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(err);
});
const app = express()

app.use(cookieSession({
    maxAge : 30*60*1000 ,
    keys : [keys.cookieKey]

})
)
app.use(passport.initialize())
app.use(passport.session())


require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000
app.listen(port)
