import passport from "passport";
import jwt from "jsonwebtoken"

export async function authenticateWithGoogle(req, res, next) {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
}

export async function googleCallback(req, res, next) {
  try {
    passport.authenticate('google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/failure' }, async (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect('/auth/failure');
      }
      
      req.login(user, async (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        const token = jwt.sign({ userId:user._id }, process.env.SECRET_KEY, {
              expiresIn: "1d",
            });
        res.cookie("X-Auth-Token", token, { maxAge: 86400000 });
            //redirect
        return res.redirect('/protected');
      });
    }) (req, res, next);
  } catch (err) {
    next(err);
  }
}
