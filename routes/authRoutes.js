const passport = require('passport')

module.exports=(app)=>{
    app.get('/auth/google',passport.authenticate('google',{
        scope : ['profile','email']
    }))
    app.get('/auth/google/callback',passport.authenticate('google',
    console.log("success")
    ))
    app.get('/auth/logout',(req,res)=>{
        req.logout();
        res.send("logged out");
    })

    app.get('/api/current_user',(req,res)=>{
        res.send(req.user)
    })
}
