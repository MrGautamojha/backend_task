//http://tutorialtous.com/mongoose/mongooseexamplesaving.php

var mongoose = require('mongoose');
var db = require('./connection');
var users = require('./model/usermodel');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/addnewuser', function(req, res, next) {
   

var callback = function(err,data){
  
  if(err){
      console.log(err)
      res.status(500).json(false)
  }
    
  else{
      res.status(200).json(true)
  }
  
}
var std = new UserModel(req.body);

 
std.save(callback); 
});
 

router.post('/checklogin', function(req, res, next) {
    UserModel.findOne({email:req.body.email,password:req.body.password},function(err,data){
        if(err){
            console.log(err)
            res.status(500).json(false)
        }
          
        else{
            if(data){
                res.status(200).json(data)
            }
            else{
                res.status(200).json(false)
            }
            
        }
      });
    
        })

router.post('/updateuser', function(req, res, next) {
    console.log(req.body)
            UserModel.findOneAndUpdate({_id:req.body.id},req.body,function(err,data){
                if(err){
                    console.log(err)
                    res.status(500).json(false)
                }
                  
                else{
                    console.log(data)
                    UserModel.findOne({_id:req.body.id},function(err,data){
                        if(err){
                            console.log(err)
                            res.status(500).json(false)
                        }
                          
                        else{
                            if(data){
                                res.status(200).json(data)
                            }
                            else{
                                res.status(200).json(false)
                            }
                            
                        }
                      });
                    
                }
              });
            
                })
       
module.exports = router; 
