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
    passport      = require('passport')
    port          = process.env.PORT || 3000

//connect to MongoDB
mongoose.connect('mongodb://localhost/meetted', function(err){
  if(err) throw err
  console.log('Database connected! Great success!')
})

//routers
var meetTedRoutes = require('./routes/route.js')

//middleware

//routes
app.get('/', function(req,res){
  res.send('Go to http://localhost:3000/meetup to see meetup groups')
})

//route for retrieving meetup events(to be merged to main page later)
app.use('/meetup', meetTedRoutes)

//listen on port
app.listen(3000, function(){
  console.log('server running on port '+ port)
})
