var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema= new Schema({
  addedby:{type:String,required:true},
  title:{type:String,required:true},
  description:{type:String,required:true},
  date:{type:String,required:true},
  time:{type:String,required:true},
  place:{type:String,required:true},
  participants:{type:String,required:true},
  participantsno:{type:String,required:true},
},{collection:'event'});

EventModel = mongoose.model('event',eventSchema);


var eventjoinSchema= new Schema({
    eventid:{type:String,required:true},
    userid:{type:String,required:true},
  },{collection:'eventjoin'});

  EventjoinModel = mongoose.model('eventjoin',eventjoinSchema);

module.exports={EventModel,EventjoinModel};