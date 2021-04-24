var express = require('express');
var router = express.Router();

/* GET BarChart. */
router.get('/barchart', function(req, res, callback) {
  res.render('charts/barchart', { title: 'Document Classification' });
});


/* GET PieChart. */
router.get('/piechart', function(req, res) {
  res.render('charts/piechart', { title: 'PIE Chart' });

});

module.exports = router;