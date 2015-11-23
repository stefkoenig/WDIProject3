var express         = require('express'),
    videoRoutes      = express.Router(),
    videoController  = require('../controllers/video_controller.js')

/////////////////////////
// create routes for /api
videoRoutes.route('/videos')
  .get(videoController.index)
  .post(videoController.create)
  // .delete(todoController.destroy)

  module.exports = videoRoutes
