// route.js
var express = require('express')
var request = require('request')
var mongoose = require('mongoose')

//import meetup model
var Meetup = require('../models/model.js')

//create a router object
var meetupRouter = express.Router()

//route for getting event from meetup.com
meetupRouter.get('/', function(req,res){
  //meetup.com url
  var requestURL = "https://api.meetup.com/2/events?key=ABDE12456AB2324445&group_urlname=ny-tech&sign=true&key=3a2b371927762ef203771e35256a42"

  //use the request package to retrieve an event from Meetup.com
  request(requestUrl, function(error, response, body){
    var eventInfo = body
})
})
