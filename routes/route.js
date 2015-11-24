var express         = require('express'),
    Router      = express.Router(),
    videoController  = require('../controllers/video_controller.js'),
    // meetupRouter   	= express.Router(),
    meetupController = require('../controllers/meetup_controller.js')

/////////////////////////
// create routes for /api
Router.route('/videos')
  .get(videoController.index)
  .post(videoController.create)
  // .delete(todoController.destroy)


Router.route('/meetups')
	.get(meetupController.show)


  module.exports = Router
  // module.exports = meetupRouter

