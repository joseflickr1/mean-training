var mongoose = require('mongoose');


	var activitySchema = mongoose.Schema({
		activityName: {type: String}

	});

	var Activity = mongoose.model('Activity', activitySchema);
