const { UserInputError, AuthenticationError } = require('apollo-server-express');

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
					throw new Error('Tutor Request not found');
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},

	Mutation: {
		async tutorRequest(
			_,
			{
				tutorRequestInput: {
					childFullName,
					childAge,
					childGender,
					childClass,
					homeAddress,
					subjects,
					tutorGender,
					state,
					location,
				},
			},
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
				tutorGender,
				state,
				location
			);
			if (!valid) {
				throw new UserInputError(`Errors`, { errors });
			}

			const user = await checkAuth(context);

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
				state,
				location,
				createdAt: new Date().toISOString(),
			});

			const request = await newRequest.save();
			return request;
		},

		async deleteRequest(_, { requestId }, context) {
			const user = await checkAuth(context);

			try {
				const request = await TutorRequest.findById(requestId);
				if (!request) {
					throw new Error('Tutor Request not found');
				}

				if (user.email.toString() === request.userEmail.toString()) {
					await request.delete();

					return 'Tutor request deleted successfully!';
				} else {
					throw new AuthenticationError('Permission denied');
				}
			} catch (error) {
				throw new Error(error);
			}
		},
	},
};

module.exports = resolvers;
