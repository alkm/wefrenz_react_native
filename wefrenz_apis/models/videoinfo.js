var mongoose = require('mongoose');
module.exports = mongoose.model('videoinfo', {
	userid : String,
	title: String,
	description: String,
	videosList : Array,
	albumCover : String,
	sharedWith: Array,
	fileName: String,
	created: {type: Date, default: Date.now()}
});