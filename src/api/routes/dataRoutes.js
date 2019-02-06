module.exports = function(app) {
  var data = require('../controllers/dataController');

<<<<<<< HEAD
//methods get called depending on request type and url
// localhost:3000/api
  app.route('/api/data')
=======
/**
  Methods get called depending on request type and url.
  table: this parameter must be NewBuggy or OldBuggy
**/
  app.route('/api/:table')
>>>>>>> 10df441c530c3e7dd6367a22f85f5c44e1edb167
    .get(data.getAll)
    .post(data.addData);

  app.route('/api/:table/:id')
    .get(data.getId)
    .delete(data.removeId)
    .put(data.updateId);
}
