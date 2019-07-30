const { model, Schema } = require('mongoose');

const tutorSChema = new Schema({
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

module.exports = model('Tutor', tutorSChema);
