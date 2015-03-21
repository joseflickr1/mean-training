
var auth = require('./auth'),
	mongoose = require('mongoose'),
	users = require('../controllers/users'),
	courses = require('../controllers/courses'),
	activities = require('../controllers/activities'),
	User = mongoose.model('User');

module.exports = function(app) {


	app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
	app.post('/api/users', users.createUser);
	app.put('/api/users', users.updateUser);

	app.get('/api/courses', auth.requiresRole('admin'), courses.getCourses);

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

	app.all('/api/*', function(req, res) {
		res.send(404);
	});


	app.get('*', function(req, res) {
		res.render('index', {
			bootstrappedUser: req.user
		});
	});


}

