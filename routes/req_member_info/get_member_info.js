var express = require('express');
var router = express.Router();
var member = require('../../models/Member');

router.post('/', function(req, res){
   var recv_data = req.body;

   var id = recv_data.id;

   member.find({id: id}, function(err, doc){
      if(err){
          console.error(err.message);
      }
      if(doc.length == 0){
          var res_data = new Object();
          res_data.code = "6100";
          res_data.message = "ID is not exist";

          res.send(res_data);
          res.end();
      }
      else{
          var add_data = new Object();
          add_data.id = doc[0].id;
          add_data.name = doc[0].name;
          add_data.address = doc[0].address;
          add_data.gender = doc[0].gender;
          add_data.point = doc[0].point;
          add_data.phone_number = doc[0].phone_number;

          var res_data = new Object();
          res_data.code = "6200";
          res_data.response = add_data;

          res.send(res_data);
          res.end();
      }
   });
});

module.exports = router;