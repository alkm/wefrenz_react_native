var mongoose = require('mongoose');
module.exports = mongoose.model('checkoutinfo', {
	userid : String,
	checkOutItem : [],
	created: {type: Date, default: Date.now()}
});