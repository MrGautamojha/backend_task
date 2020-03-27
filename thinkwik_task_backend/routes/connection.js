const mongoose=require("mongoose")

var url='mongodb://localhost:27017/thinkwik'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},function(err){

  if(!err){
    console.log("Connected MONGO")
  }
  else
  {console.log("Fail to Connect")}
 });
