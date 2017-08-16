var express = require('express');
var router = express.Router();
var db = require('./../app/db');
var adminController = require('./../app/controllers/adminController');


router.get('/admin', function(req, res) {
    var db = req.db;
    adminController.getAllCards(function(e, docs){
        //res.json(docs);
        res.render('index.jade', {data: docs});
    });
});


router.post('/admin/show-card', function(req, res) {
    													//console.log("params: " + req.params.id);
    													//console.log("body: " + req.body.id);
    adminController.getCard(req.body.id, function(e,docs){
        res.render('./partials/_main__show-card.jade', {data: docs});
    });
});
//post
router.get('/admin/create-card', function(req, res) {
    //var db = req.db;
    adminController.createCard(req, function(e, docs){
        res.json(docs);
    });
});
//delete
router.get('/admin/delete-card', function(req, res) {
    //var db = req.db;
    adminController.deleteCard(function(e, docs){
        res.json(docs);
    });
});
router.get('/admin/delete-all', function(req, res) {
    //var db = req.db;
    adminController.deleteAll(function(e, docs){
        res.json(docs);
    });
});
//put
router.get('/admin/update-card', function(req, res) {
    //var db = req.db;
    adminController.updateCard(function(e, docs){
        res.json(docs);
    });
});



module.exports = router;
