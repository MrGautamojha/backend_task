var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  birthdate:{type:String,required:true},
  gender:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
   
},{collection:'user'});
/* 
usersSchema.statics.getId=function(_userid,cb){
   console.log("userid"+_userid);
   return UserModel.find({ userid: new RegExp(_userid, 'i') },{userid:1,_id:1}, cb);
};

usersSchema.methods.getUserId=function(_userid,cb){
  console.log("userid"+_userid);
   return UserModel.find({ userid: new RegExp(_userid, 'i') },{userid:1,_id:1}, cb);
};*/
UserModel = mongoose.model('user',userSchema);

module.exports={UserModel};