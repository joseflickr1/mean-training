
var Activity = require('mongoose').model('Activity');

exports.getActivities = function(req, res) {
	
	Activity.find({}).exec(function(err, collection) {
		res.send(collection);
	})
};


exports.createActivities = function(req, res, next) {

	var activityData = req.body;
	
	Activity.create(activityData, function(err, activity) {
		if(err) {
			
			res.status(400);
			return res.send({reason: err.toString()});
		}

		res.send(activity);
		
	})
};