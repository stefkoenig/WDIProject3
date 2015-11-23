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
    videoRoutes   = require('./routes/route')
    port          = process.env.PORT || 3000


//makes json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(port, function(){
  console.log('server running on port', port)
})

mongoose.connect('mongodb://localhost/videos');


app.use(express.static(__dirname + "/public"));

app.use('/api', videoRoutes)






