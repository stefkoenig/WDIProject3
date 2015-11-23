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
    Schema        = mongoose.Schema,
    port          = process.env.PORT || 3000



app.listen(port, function(){
  console.log('server running on port', port)
})

mongoose.connect('mongodb://localhost/videos');

app.use(express.static(__dirname + "/public"));

/////////////////////////////////////

//creating the schema of our meetup records
  var videoSchema = new Schema({
    videoId: String,
    source: String
  })
//middleware before saving to the db -MAYBE CHANGE?
videoSchema.pre('save',function(next){
  if(!this.created_at){
    var currentDate = new Date()
    this.created_at = currentDate
  }
  next()
})
// build a model from the schema
var Video = mongoose.model('Video', videoSchema)
var embedURL;
//make the model object available to rest of application
// module.exports = Video

app.get('/videos', function(req,res){
    Video.find({})
    .exec(function(err, results){
        if (err) console.log(err)
    res.json(results)
})
})

// app.get('/addVideo', function(req,res){
//     $.ajax({
//             url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUAuUUnT6oDeKwE6v1NGQxug&key=AIzaSyAzeF6VB_ogSwIfHIFYje4IAY0enmfRum0",
//             method: 'GET',
//             success: function(data){
//                 console.log(data)
//                 var randomVideo=Math.floor(Math.random() * data.items.length)
//                 console.log(randomVideo)
//                 var videoId = data.items[randomVideo].snippet.resourceId.videoId
//                 embedURL = 'www.youtube.com/embed/' + videoId
//                 var source = $('#display-video').attr('src')
//                 source =  embedURL
//                 console.log(embedURL) 
//                 console.log(source) 

        
// var displayVideo = Video({
//         videoId: videoId,
//         source: source
//       })
//       //save the object to the database and send user meetups to view
//       displayVideo.save(function(err){
//         if(err) throw err
//         console.log('Event saved to db!' + source)
//         res.send('<div>"' + source +'"</div>')
//       })
//       }
//         })
//         })
    


