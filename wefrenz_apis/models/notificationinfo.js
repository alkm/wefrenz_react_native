var mongoose = require('mongoose');

module.exports = mongoose.model('notificationinfo', {
	userid : String,
	itemid: String,
	fullname : String,
	profilepic : Object,
	type : String,
	text : String,
	filepath : String,
	filename: String,
	notificationpic: String,
	notificationmodule: String,
	conversion: String,
	isReady : Boolean,
	state: String,
	isShown : Boolean,
	created: {type: Date, default: Date.now}
});