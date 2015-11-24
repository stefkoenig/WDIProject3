//app.js
var express       = require('express'),
    app           = express(),
    ejs           = require('ejs'),
    ejsLayouts    = require('express-ejs-layouts'),
    mongoose      = require('mongoose'),
    flash         = require('connect-flash'),
    logger        = require('morgan'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    session       = require('express-session'),
    passport      = require('passport'),
    videoRouter   = require('./routes/route.js'),
    meetupRouter  = require('./routes/route.js'),
    port          = process.env.PORT || 3000


//makes json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(port, function(){
  console.log('server running on port', port)
})

mongoose.connect('mongodb://localhost/videos')


app.use(express.static(__dirname + "/public"))

// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST')
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \Authorization')
// })

app.use('/api', videoRouter)
app.use('/api', meetupRouter)






