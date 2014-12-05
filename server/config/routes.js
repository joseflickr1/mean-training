
var auth = require('./auth'),
	mongoose = require('mongoose'),
	users = require('../controllers/users'),
	activities = require('../controllers/activities'),
	User = mongoose.model('User');

module.exports = function(app) {


	app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
	app.post('/api/users', users.createUsers);

	app.get('/api/activities', activities.getActivities);
	app.post('/api/activities', activities.createActivities);

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
	});

	
	app.post('/login', auth.authenticate);

	app.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});


	app.get('*', function(req, res) {
		res.render('index', {
			bootstrappedUser: req.user
		});
	});


}

