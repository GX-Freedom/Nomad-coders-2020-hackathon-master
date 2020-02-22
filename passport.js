import User from "./model/user";
import passport from "passport";
import routes from "./routes";
import GoogleStrategy from "passport-google-oauth20";
import NaverStrategy from "passport-naver";
import dotenv from "dotenv";

dotenv.config();


passport.use(User.createStrategy());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:4000${routes.googleAuthCallback}`
},
async function (accessToken, refreshToken, profile, cb) {
   /* console.log(profile, cb)
    const {
        _json : { email, name, picture,id }
    } = profile;
    const user = await User.findOrCreate({ email }, function (err, user) {
        console.log("We've found user!");
        return cb(err, user);
    });
    console.log(user)
    */
    const {
        _json: { id, picture, name, email }
    } = profile;
    try {
        const user = await User.findOne({ email })
        if (user) {
            user.googleId = id;
            user.profilePhoto = picture;
            user.save();
            return cb(null, user)
        }
        const newUser = await User.create({
            email,
            username: name,
            googleId: id,
            profilePhoto: picture
        });
        return cb(null, newUser);

    } catch (error) {
        return cb(error);
    }
}
)
)

passport.use(new NaverStrategy({
    clientID: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
    callbackURL: `http://localhost:4000${routes.naverAuthCallback}`
},
async function(accessToken, refreshToken, profile, cb){
        console.log(profile);
    
    const { _json : {id,email, profile_image, nickname} } = profile;
    try{
        const user = await User.findOne({email})
        if (user) {
            user.naverId = id;
            user.profilePhoto = profile_image;
            user.save();
            return cb(null, user)
        }
        const newUser = await User.create({
            email,
            username: nickname,
            naverId: id,
            profilePhoto: profile_image
        });
        return cb(null, newUser);
        
    }catch(error){
        return cb(error)
    }
    
}
))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
