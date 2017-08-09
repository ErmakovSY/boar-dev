var db = require('../db');

exports.selectAllCards = function (req, res) {
  db.collection('cards').find().toArray(function (err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
}





	// exports.selectAllCards = function(req, res) {
	// 	return res.render('index', { title: 'Hey', message: 'Hello there!'});
	// }
