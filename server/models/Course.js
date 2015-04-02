var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type:String, required: '{PATH} is required!'},
	featured: {type: Boolean, required: '{PATH} is required!'},
	published: {type:Date, required: '{PATH} is required!' },
	tags: [String] 
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
	Course.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			Course.create({title: 'C# for sociopaths', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
			Course.create({title: 'A C# for sociopaths', featured: true, published: new Date('09/5/2013'), tags: ['C#']});
			Course.create({title: 'B C# for sociopaths', featured: true, published: new Date('08/5/2013'), tags: ['C#']});
			Course.create({title: 'D C# for sociopaths', featured: true, published: new Date('08/5/2015'), tags: ['C#']});
			Course.create({title: 'E C# for sociopaths', featured: true, published: new Date('08/4/2015'), tags: ['C#']});
		}
	})
}

exports.createDefaultCourses = createDefaultCourses;