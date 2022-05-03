var mongoose = require('mongoose');

module.exports = mongoose.model('userinfo', {
	username: String,
	fullname : String,
	profilepic : Object,
	wallpicpath : String,
	wallpicpos : String, 
	appearance : String,
	easyrtcid : String,
	done : Boolean
});