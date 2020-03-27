//http://tutorialtous.com/mongoose/mongooseexamplesaving.php

var mongoose = require('mongoose');
var db = require('./connection');
var users = require('./model/eventmodel');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/addnewevent', function(req, res, next) {
   console.log(req.body)

var callback = function(err,data){
  
  if(err){
      console.log(err)
      res.status(500).json(false)
  }
    
  else{
      res.status(200).json(true)
  }
  
}
var std = new EventModel(req.body);

 
std.save(callback); 
});
 

router.get('/displayall', function(req, res, next) {
    EventModel.find({},function(err,data){
        if(err){
            console.log(err)
            res.status(500).json([])
        }
          
        else{
            res.status(200).json(data)
        }
      });
    
        })



        router.post('/displayallbyuser', function(req, res, next) {
            EventModel.find({addedby:req.body._id},function(err,data){
                if(err){
                    console.log(err)
                    res.status(500).json([])
                }
                  
                else{
                    console.log(data)
                    res.status(200).json(data)
                }
              });
            
                })

                router.post('/eventjoin', function(req, res, next) {
                    EventjoinModel.findOne({eventid:req.body.eventid,userid:req.body.userid},function(err,data){
                        if(err){
                            console.log(err)
                            res.status(500).json(false)
                        }
                          
                        else{
                            if(data){
                                res.status(200).json(false)
                            }
                            else{
                                var callback = function(err,data){
                   
                                    if(err){
                                        console.log(err)
                                        res.status(500).json(false)
                                    }
                                      
                                    else{
                                        res.status(200).json(true)
                                    }
                                    
                                  }
                                  var std = new EventjoinModel(req.body);
                                  
                                  std.save(callback);
                            }
                            
                        }
                      });
                    
                 
                  
                 });

                 router.post('/eventleft',function(req,res){
                    EventjoinModel.findOneAndDelete({_id:req.body._id},function(err,data){
                        if(err){
                            console.log(err)
                            res.status(500).json(false)
                        }
                          
                        else{
                            console.log(data)
                            
                        }
                      });
                    
                 })

            router.post('/eventjoinevents',function(req,res){
                    var arr=[]
                    EventjoinModel.find({userid:req.body._id},function(err,data){
                        if(err){
                            console.log(err)
                            res.status(500).json(false)
                        }
                        
                        else{
                            data.map(item=>{
                                EventModel.findOne({_id:item.eventid},function(err,data){
                                    if(err){
                                        
                                    }
                                    else{
                                        arr.push(data)
                                    }
                                })
                            })
                            console.log(arr)
                            res.status(200).json(data)
                        }
                      });
                 })


module.exports = router; 