var mongoose = require('mongoose');


	var activitySchema = mongoose.Schema({
		created: {type: Date, default: Date.now()},
		activityName: {type: String},
		userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

	});

	var Activity = mongoose.model('Activity', activitySchema);
