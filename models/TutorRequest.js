const { model, Schema } = require('mongoose');

const tutorRequestSChema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'tutorRequests',
	},
	userEmail: String,
	childFullName: String,
	childAge: Number,
	childGender: String,
	childClass: String,
	homeAddress: String,
	subjects: [String],
	tutorGender: String,
	createdAt: String,
});

module.exports = model('TutorRequest', tutorRequestSChema);
