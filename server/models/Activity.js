var mongoose = require('mongoose');


	var activitySchema = mongoose.Schema({
		created: {type: Date, default: Date.now},
		activityName: {type: String}

	});

	var Activity = mongoose.model('Activity', activitySchema);
