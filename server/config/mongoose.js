
var mongoose = require('mongoose'),
	userModel = require('../models/Users'),
	courseModel = require('../models/Course'),
	activityModel = require('../models/Activity');

module.exports = function(config) {
	mongoose.connect(config.db);	

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('meantraining db opened');
	});	

	userModel.createDefaultUsers();
	courseModel.createDefaultCourses();


}


