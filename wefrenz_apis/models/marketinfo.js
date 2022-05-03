var mongoose = require('mongoose');
module.exports = mongoose.model('marketinfo', {
	userid : String,
	itemName : String,
	category : String,
	location : String,
	price : Number,
	contactNo : Number,
	productImage : String,
	productDesc : String,
	created: {type: Date, default: Date.now()}
});