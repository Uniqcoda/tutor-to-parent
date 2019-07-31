const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateParentSignUpInput, validateLoginInput } = require('../../util/validators');
const { SECRET_KEY } = require('../../config');
const Parent = require('../../models/Parent');

const resolvers = {
	Query: {
		async getParents() {
			try {
				const parents = await Parent.find();
				return parents;
			} catch (error) {
				throw new Error(error);
			}
		},
	},
	Mutation: {
		async parentSignUp(
			_,
			{
				parentSignUpInput: {
					firstName,
					lastName,
					email,
					phone,
					gender,
					stateOfRes,
					location,
					password,
					confirmPassword,
					userRole,
				},
			}
		) {
			//validate parent data
			const { errors, valid } = validateParentSignUpInput(
				firstName,
				lastName,
				email,
				phone,
				gender,
				stateOfRes,
				location,
				password,
				confirmPassword
			);
			if (!valid) {
				throw new UserInputError(`Errors`, { errors });
			}

			// make sure parent doesn't already exist
			const parent = await Parent.findOne({ email });
			if (parent) {
				throw new UserInputError('email already exists in database', {
					errors: {
						email: 'This email already exists in database',
					},
				});
			}

			// hash password and create an auth token
			password = await bcrypt.hash(password, 12);
			const newParent = new Parent({
				firstName,
				lastName,
				email,
				phone,
				gender,
				stateOfRes,
				location,
				password,
				userRole,
				createdAt: new Date().toISOString(),
			});
			const res = await newParent.save();
			const token = jwt.sign(
				{
					id: res.id,
					firstName: res.firstName,
					lastName: res.lastName,
					email: res.email,
					phone: res.phone,
					gender: res.gender,
					stateOfRes: res.stateOfRes,
					location: res.location,
					userRole: res.userRole,
				},
				SECRET_KEY,
				{ expiresIn: '1h' }
			);

			return {
				...res._doc,
				id: res._id,
				token,
			};
		},
	},
};

module.exports = resolvers;
