
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
	
	// app.all('/api/*', function(req, res) {
	// 	res.sendStatus(404);
	// });

	app.all('*', function(req, res, next) {
		// * * *
		// http://stackoverflow.com/questions/21221688/angularjs-resource-makes-http-options-request-instead-of-http-post-for-save-me
	    // * * * 
	    // add details of what is allowed in HTTP request headers to the response headers
	    res.header('Access-Control-Allow-Origin', 'http://hidden-journey-1760.herokuapp.com');
	    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	    res.header('Access-Control-Allow-Credentials', false);
	    res.header('Access-Control-Max-Age', '86400');
	    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
	    // the next() function continues execution and will move onto the requested URL/URI
	    next();
	});

	app.options('*', function(req, res) {
    res.send(200);
});


	app.get('*', function(req, res) {
		res.render('index', {
			bootstrappedUser: req.user
		});
	});


}

