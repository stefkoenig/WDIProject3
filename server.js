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

app.set('view engine', 'ejs')

//connect to MongoDB
mongoose.connect('mongodb://localhost/meetted', function(err){
  if(err) throw err
  console.log('Database connected! Great success!')
})

//routers
var meetTedRoutes = require('./routes/route.js')

//middleware
app.use(logger('dev'))

//static assets
app.use(express.static('public'))

//make json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//routes
app.get('/', function(req,res){
  res.send('Go to http://localhost:3000/meetup to see meetup groups')
})

//Meetup routes
app.use('/meetup', meetupRoutes)

//listen on port
app.listen(3000, function(){
  console.log('server running on port '+ port)
})
