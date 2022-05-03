var mongoose = require('mongoose');
module.exports = mongoose.model('photosinfo', {
	userid : String,
	title: String,
	description: String,
	photosList : Array,
	albumCover : String,
	sharedWith: Array,
	created: {type: Date, default: Date.now()}
});