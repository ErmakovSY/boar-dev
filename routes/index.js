var express = require('express');
var router = express.Router();
var db = require('./../app/db');
var adminController = require('./../app/controllers/adminController');


router.get('/admin', function(req, res) {
    var db = req.db;
    adminController.getAllCards(function(e, docs){
        res.render('index.jade', {data: docs});
    });
});

router.get('/admin/show-card/:id', function(req, res) {
    adminController.getCard(req.params.id, function(e,docs){
    	console.log("router: got, rendering _main__show-card.jade");
        res.render('./partials/_main__show-card.jade', {data: docs});
    });
});

router.post('/admin/create-card', function(req, res) {
    adminController.createCard(req.body, function(err, result){
        adminController.getAllCards(function(e, docs){
        	console.log("router: edited, rendering index.jade");
        	res.render('index', {data: docs, message: "Succcessfully edited"});
    	});
    });
});

router.delete('/admin/delete-card', function(req, res) {
    adminController.deleteCard(req.body.id, function(err, result){
        adminController.getAllCards(function(e, docs){
        	console.log("router: deleted, rendering index.jade");
        	//console.log(docs);
        	res.render('index', {data: docs, message: "Deleted"});//строка не отрабатывает
    	});
    });
});

router.get('/admin/delete-all', function(req, res) {
    adminController.deleteAll(function(e, docs){
        res.json(docs);
    });
});

router.put('/admin/update-card', function(req, res) {
    adminController.updateCard(req.body, function(err, result){
        adminController.getAllCards(function(e, docs){
        	console.log("router: edited, rendering index.jade");
        	res.render('index', {data: docs, message: "Succcessfully edited"});
    	});
    });
});



module.exports = router;
