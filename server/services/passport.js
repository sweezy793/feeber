const passport =require('passport')
const mongoose=require('mongoose')
const GoogleStrategy=require('passport-google-oauth20').Strategy;   
const keys=require('../config/keys')

const User=mongoose.model('users');   //just a different way of requiring userschema because conventional way might cause error

passport.serializeUser((user,done)=>{
	done(null,user.id);
});

passport.deserializeUser((id,done)=>{
	User.findById(id)
	.then((user)=>{
		done(null,user);
	})
})

passport.use(new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback',
        proxy:true 
    },
    async (accessToken,refreshToken,profile,done)=>{
        const existingUser=await User.findOne({googleID:profile.id})
        if(existingUser){
            // exisiting user already exists in record
			done(null,existingUser);
        }
        else{
            //we don't have a user record with this ID, so this makes a new one
        	const user=await new User({ googleID:profile.id }).save();
            done(null,user);
            }       
        }
    )
);






