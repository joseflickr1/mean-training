

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development: {
		db: 'mongodb://localhost/meantraining',
		rootPath: rootPath,
		port: process.env.PORT || 3030	

	},
	production: {
		rootPath: rootPath,
		dn: 'mongodb://dbmean:dbmean@ds049160.mongolab.com:49160/heroku_app31184641',
		port: process.env.PORT || 80	
	}
}