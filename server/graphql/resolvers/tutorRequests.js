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
		async getTutorRequest(_, { requestId }) {
			try {
				const request = await TutorRequest.findById(requestId);
				if (request) {
					return request;
				} else {
					throw new Error('TutorRequest not found');
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},

	Mutation: {
		async tutorRequest(
			_,
			{ tutorRequestInput: { childFullName, childAge, childGender, childClass, homeAddress, subjects, tutorGender } },
			context
		) {
			//validate request data
			const { errors, valid } = validateRequestInput(
				childFullName,
				childAge,
				childGender,
				childClass,
				homeAddress,
				subjects,
				tutorGender
			);
			if (!valid) {
				throw new UserInputError(`Errors`, { errors });
			}

			const user = await checkAuth(context);

			if (user.userRole !== 'parent') {
				throw new UserInputError('Only a parent can make a tutor request');
			}
			const newRequest = new TutorRequest({
				userId: user.id,
				userEmail: user.email,
				childFullName,
				childAge,
				childGender,
				childClass,
				homeAddress,
				subjects,
				tutorGender,
				createdAt: new Date().toISOString(),
			});
			const request = await newRequest.save();
			return request;
		},

	},
};

module.exports = resolvers;
