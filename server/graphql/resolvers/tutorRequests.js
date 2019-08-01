const { UserInputError, AuthenticationError } = require('apollo-server');

const { validateRequestInput } = require('../../util/validators');
const checkAuth = require('../../util/check-auth');
const TutorRequest = require('../../models/TutorRequest');

const resolvers = {
	Query: {
		async getTutorRequests() {
			try {
				const tutorRequests = await TutorRequest.find().sort({ createdAt: -1 });
				return tutorRequests;
			} catch (error) {
				throw new Error(error);
			}
		},

	},

};

module.exports = resolvers;
