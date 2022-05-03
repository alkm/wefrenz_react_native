var mongoose = require('mongoose');
module.exports = mongoose.model('audioinfo', {
	userid : String,
	title: String,
	description: String,
	audiosList : Array,
	albumCover : String,
	sharedWith: Array,
	created: {type: Date, default: Date.now()}
});