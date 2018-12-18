const passport=require('passport')

module.exports=(app)=>{
    app.get('/auth/google',passport.authenticate('google',{        //'google' uses the google strategy we defined in passport.js file
        scope:['profile','email']
        })
    );

    app.get('/auth/google/callback',passport.authenticate('google'));
}
