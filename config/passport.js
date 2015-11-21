// /config/passport.js

var passport      = require('passport'),
var LocalStrategy = require('passport-local').Strategy

var User          = require('../model/User.js')

passport.serializeUser(function(user,done){
  done(null, user.id)
})

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user)
  })
})

///////////////
//local signup

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  User.findOne({'local.email': email}, function(err, user){
    if(err) return done User()
    if(user) return done(null, false, req.flash('signupmessage', 'that email is taken'))
    var newUser = new User()
    newUser.local.email = email
    newUser.local.password = newUser.generateHash(password)

    newUser.save(function(err){
      if(err) throw err
      return done(null, newUser, null)
    })
  }})
}))
