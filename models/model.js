//model.js

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

//creating the schema of our meetup records
  var meetupSchema = new Schema({
    event_name: String,
    event_id: Number,
    time: Number,
    utc_offset: Number,
    category_id: Number,
    category_name: String,
    group_name: String,
    group_url: String,
    zip: Number,
    country: String,
    city: String,
    state: String,
    group_description: String,
    created_at: Date
  })

  // var meetupSchema = new Schema({
  //   event_name: String,
  //   event_url: String,
  //   group_name: String,
  //   group_url: String,
  //   date: Number,
  //   zip: Number,
  //   country: String,
  //   city: String,
  //   description: String,
  //   category: Number,
  //   created_at: Date
  // })

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
