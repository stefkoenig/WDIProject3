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
