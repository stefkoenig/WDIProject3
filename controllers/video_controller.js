var Video  = require('../models/video.js'),
    request = require('request')
    

function index(req, res){
var requestURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUAuUUnT6oDeKwE6v1NGQxug&maxResults=25&key=AIzaSyAzeF6VB_ogSwIfHIFYje4IAY0enmfRum0"
request(requestURL,function(error,response,body){
  var videoItems = JSON.parse(body).items
  console.log(videoItems)
        var randomVideo=Math.floor(Math.random() * videoItems.length)
        console.log(randomVideo)
        var videoId = videoItems[randomVideo].snippet.resourceId.videoId
        var embedURL = 'https://www.youtube.com/embed/' + videoId
        console.log(embedURL)
        res.send(embedURL) 
})
}

function create(req, res){
 
  var video = new Video()
  video.videoId = req.body.videoId
  console.log(req.body.videoId)
  // // video.source  = req.body.source
  video.save(function(err){
    if (err) res.send(err)
      console.log("success")
    res.json({success: true, message: 'Video created!'})
  })
}


module.exports = {
  index: index
  ,create: create
}
