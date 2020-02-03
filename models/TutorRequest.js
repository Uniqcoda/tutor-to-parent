const { model, Schema } = require('mongoose');

const tutorRequestSChema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'tutorRequests',
	},
	userEmail: String,
	childFullName: String,
	childAge: String,
	childGender: {
		type: String,
		enum: ['Male', 'Female', 'Others']
	},
	childClass: String,
	homeAddress: String,
	subjects: [String],
	tutorGender: {
		type: String,
		enum: ['Male', 'Female', 'Others']
	},
	location: String,
	createdAt: String,
});

module.exports = model('TutorRequest', tutorRequestSChema);
