var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');


	var userSchema = mongoose.Schema({
		firstName: {type: String, required: '{PATH} is required!'}, 
		lastName: {type: String, required: '{PATH} is required!'},
		username: {
			type: String, 
			required: '{PATH} is required!',
			unique: true

		},
		salt: {type: String, required: '{PATH} is required!'},
		hashed_pwd: {type: String, required: '{PATH} is required!'},
		roles: [String]

	});
	var User = mongoose.model('User', userSchema);

	function createDefaultUsers() {
		User.find({}).exec(function(err,collection) {
			if(collection.length === 0) {
				var salt, hash;

				salt = encrypt.createSalt();
				hash = encrypt.hashPwd(salt, 'joe');
				User.create({firstName: 'Joe', lastName: 'James', username: 'joe', salt: salt, hashed_pwd: hash,
							roles: ['admin']});

				salt = encrypt.createSalt();
				hash = encrypt.hashPwd(salt, 'joe');
				User.create({firstName: 'John', lastName: 'Papa', username: 'john', salt: salt, hashed_pwd: hash,
							roles: []});
				
				salt = encrypt.createSalt();
				hash = encrypt.hashPwd(salt, 'joe');
				User.create({firstName: 'Dan', lastName: 'Wahlin', username: 'dan', salt: salt, hashed_pwd: hash});
			}
		})	
	};

	function findOneUserByFirstName(name, callback) {
		User.find({username: name}, callback);

	}

exports.createDefaultUsers = createDefaultUsers;
exports.findOneUserByFirstName = findOneUserByFirstName;
	