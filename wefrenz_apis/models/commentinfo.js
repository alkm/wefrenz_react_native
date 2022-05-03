var mongoose = require('mongoose');
module.exports = mongoose.model('commentinfo', {
	commentid : String,
	commenttext: String,
	commentfrom: String,
	commentto: String,
	fullname : String,
	profilepic : String,
	commenttype: String,
	filePath : String,
	isReady : Boolean,
	isNotified : Boolean,
	likeArr : Array,
	loveArr : Array,
	poster : String,
	colorInfo : String,
	fontFamily : String,
	fontSize : String,
	fontStyle : String,
	textDecoration : String,
	fontWeight : String,
	addWatcherArr : Array,
	created: {type: Date, default: Date.now()}
});