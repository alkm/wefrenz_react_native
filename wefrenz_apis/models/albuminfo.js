var mongoose = require('mongoose');
module.exports = mongoose.model('albuminfo', {
	userid : String,
	photosArr : Array,
	musicArr : Array,
	videosArr : Array,
	created: {type: Date, default: Date.now},
	done : Boolean
});