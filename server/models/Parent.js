const { model, Schema } = require('mongoose');

const parentSChema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	gender: String,
	stateOfRes: String,
	location: String,
	password: String,
	userRole: String,
	createdAt: String,
});

module.exports = model('Parent', parentSChema);
