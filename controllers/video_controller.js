var Video  = require('../models/video.js')
    

function index(req, res){
  Video.find({}, function(err, videos){
    if (err) res.send(err)
    res.json(videos)
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


// function destroy(req,res){
// 	Todo.remove
// }


module.exports = {
  index: index
  ,create: create
}
