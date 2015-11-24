var express         = require('express'),
    videoRouter      = express.Router(),
    videoController  = require('../controllers/video_controller.js'),
    meetupRouter   	= express.Router(),
    meetupController = require('../controllers/meetup_controller.js')

/////////////////////////
// create routes for /api
videoRouter.route('/videos')
  .get(videoController.index)
  .post(videoController.create)
  // .delete(todoController.destroy)


meetupRouter.route('/meetups')
	.get(meetupController.show)


  module.exports = videoRouter
  module.exports = meetupRouter

