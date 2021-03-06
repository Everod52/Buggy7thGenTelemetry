module.exports = function(app) {
  var data = require('../controllers/dataController');

/**
  Methods get called depending on request type and url.
  table: this parameter must be NewBuggy or OldBuggy
**/
  app.route('/api/:table')
    .get(data.getAll)
    .post(data.addData);

  app.route('/api/:table/recent')
    .get(data.getLastValues);

  app.route('/api/:table/:id')
    .get(data.getId)
    .delete(data.removeId)
    .put(data.updateId);
}
