// Step 2 //
var express = require('express'),
    passport = require('passport'),
    userRouter = express.Router()

///////////// Step 5 /////////////
userRouter.route('/login')
  .get(function(req, res){
    res.render('login', { message: req.flash('loginMessage')})
  })
  .post(passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }))


userRouter.route('/signup')
  .get(function(req, res){
    res.render('signup', { message: req.flash('signupMessage') })
  })
  .post(passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }))
  ////////// End Step 5 ///////////

//generate users profile page when logged in
userRouter.get('/profile', isLoggedIn, function(req, res){
  res.render('profile', {user: req.user})
})

///////////// Step 9 /////////////
userRouter.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}))

userRouter.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/'
}))
////////// End Step 9 ///////////

///////////// Step 6 /////////////
userRouter.get('/logout', function(req, res){
  req.logout()
  res.redirect('/')
})
////////// End Step 6 ///////////

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next()
  res.redirect('/')
}

module.exports = userRouter

// End Step 2 //
