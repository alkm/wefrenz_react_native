var mongoose = require('mongoose');
module.exports = mongoose.model('feedinfo', {
	userid : String,
	fullname : String,
	profilepic : String,
	post : String,
	title: String,
	description: String,
	type : String,
	filePath : String,
	isReady : Boolean,
	isNotified : Boolean,
	likeArr : Array,
	loveArr : Array,
	commentArr : Array,
	colorInfo : String,
	fontFamily : String,
	fontSize : String,
	fontStyle : String,
	textDecoration : String,
	fontWeight : String,
	addWatcherArr : Array,
	created: {type: Date, default: Date.now}
});