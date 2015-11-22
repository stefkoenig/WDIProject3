// route.js
var express = require('express'),
    request = require('request'),
   mongoose = require('mongoose')

//import meetup model
var Meetup = require('../models/model.js')

//create a router object
var meetupRouter = express.Router()

//route for getting event from meetup.com
meetupRouter.get('/', function(req,res){
  //meetup.com url
  var requestUrl = "https://api.meetup.com/2/events?key=ABDE12456AB2324445&group_urlname=ny-tech&sign=true&key=3a2b371927762ef203771e35256a42"

  //use the request package to retrieve an event from Meetup.com
  request(requestUrl, function(error, response, body){
    var eventInfo = body

  //create an object from our Meetup model. UPDATE THIS
    var meetupEvent = Meetup({
      event_name : eventInfo
      // event_url: eventInfo.results.event_url,
      // group_name: eventInfo.results.group.name,
      // group_url: eventInfo.results.group.urlname,
      // //date: eventInfo.results.,
      // zip: eventInfo.results.venue.zip,
      // country: eventInfo.results.venue.country,
      // city: eventInfo.results.venue.city,
      // description: eventInfo.results.description,
      // //category: eventInfo.results.,
    })

    //save the object to the database and send user meetups to view
    meetupEvent.save(function(err){
      if(err) throw err
      console.log('Event saved to db!')
      res.send('<div>"' + meetupEvent +'"</div>')
    })
  })
})

module.exports = meetupRouter
