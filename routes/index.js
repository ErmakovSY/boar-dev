var express = require('express');
var router = express.Router();
var db = require('./../app/db');
var adminController = require('./../app/controllers/adminController');


router.get('/admin', function(req, res) {
    var db = req.db;
    adminController.selectAllCards(function(e,docs){
        res.json(docs);
    });
});

router.get('/admin/create-card', function(req, res) {
    var db = req.db;
    adminController.addCard(function(e,docs){
        res.json(docs);
    });
});

router.get('/admin/show-card', function(req, res) {
    var db = req.db;
    adminController.showCard(function(e,docs){
        res.json(docs);
    });
});

router.get('/admin/update-card', function(req, res) {
    var db = req.db;
    adminController.showCard(function(e,docs){
        res.json(docs);
    });
});

router.get('/admin/delete-card', function(req, res) {
    var db = req.db;
    adminController.deleteCard(function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
