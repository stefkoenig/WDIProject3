var passport = require('../config/passport.js')
var User     = require('../models/User.js')


function index(req,res){
    User.find({}, function(err,data){
        if(err) res.json({ err: err })
        res.json(data)
    })
}

function update(req, res){
  User.findOneAndUpdate({name: req.params.name}, {email: req.params.email}, {zip: req.params.zip}, {password: req.params.email}, function(err, user){
    if(err) res.send(err)
    res.json(user)
  })
}

function show(req, res){
     User.find({_id: req.user._id}, function(err,user){
         if(err) res.json({ err: err })
         console.log("the user is ", req.user)

         res.render('profile', {user: req.user})
     })
 }

function destroy(req, res){
  console.log(req.user._id)
    User.findOneAndRemove({_id: req.user._id}, function(err, user){
        if(err) res.send(err)
        res.json(user)
    })
}


module.exports = {
    index: index,
    show: show,
    update: update,
    destroy: destroy
}
