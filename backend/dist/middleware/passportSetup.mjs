import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from "dotenv";
import User from "../models/User.js";

config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
  },
  async function(req, accessToken, refreshToken, profile, done) {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = new User({
          googleId: profile.id,
          username: profile.emails[0].value.split('@')[0],
          email: profile.emails[0].value,
          updatedAt: new Date(),
          createdAt: new Date(),
        });
        await user.save();
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

passport.serializeUser(function(user, cb) {
    cb(null, {
      id: user.googleId,
      username: user.username,
    });
});

passport.deserializeUser(async function(user, cb) {
    try {
      const user1 = await User.findOne({ googleId: user.id });
      cb(null, user1);
    } catch (error) {
      cb(error, null);
    }
});

export default passport;
