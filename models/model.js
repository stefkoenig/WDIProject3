//model.js

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

//creating the schema of our meetup records
  var meetupSchema = new Schema({
    event_name: String,
    event_url: String,
    group_name: String,
    date: Number,
    zip: Number,
    country: String,
    city: String,
    description: String,
    category: Number
  })

//middleware before saving to the db -MAYBE CHANGE?
meetupSchema.pre('save',function(next){
  if(!this.created_at){
    var currentDate = new Date()
    this.created_at = currentDate
  }
  next()
})

// build a model from the schema
var Meetup = mongoose.model('Meetup', meetupSchema)

//make the model object available to rest of application
module.exports = Meetup
