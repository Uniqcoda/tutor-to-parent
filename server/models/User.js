const { model, Schema } = require('mongoose');

const userSChema = new Schema({
	firstName: String,
	lastName: String,
	email: {type: String, lowercase: true},
	phone: String,
	gender: String,
	stateOfRes: String,
	location: String,
	password: String,
	userRole: String,
	createdAt: String,
});

module.exports = model('User', userSChema);
