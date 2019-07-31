const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { validateParentSignUpInput, validateLoginInput } = require('../../util/validators');
const { SECRET_KEY } = require('../../config');
const Parent = require('../../models/Parent');

function generateToken(parent) {
	return jwt.sign(
		{
			id: parent.id,
			firstName: parent.firstName,
			lastName: parent.lastName,
			email: parent.email,
			phone: parent.phone,
			gender: parent.gender,
			stateOfRes: parent.stateOfRes,
			location: parent.location,
			userRole: parent.userRole,
		},
		SECRET_KEY,
		{ expiresIn: '1h' }
	);
}

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
		async getParent(_, {parentId}) {
			try {
				const parent = await Parent.findById(parentId);
        if (parent) {
          return parent;
        } else{
          throw new Error('User not found');

        }
			} catch (error) {
				throw new Error(error);
			}
		},
	},

	Mutation: {
		async login(_, { email, password }) {
			const { errors, valid } = validateLoginInput(email, password);
			if (!valid) {
				throw new UserInputError('Errors', { errors });
			}
			const parent = await Parent.findOne({ email });

			if (!parent) {
				errors.general = 'User not found';
				throw new UserInputError('User not found', { errors });
			}
			const match = await bcrypt.compare(password, parent.password);
			if (!match) {
				errors.general = 'Wrong user details';
				throw new UserInputError('Wrong user details', { errors });
			}
			const token = generateToken(parent);

			return {
				...parent._doc,
				id: parent._id,
				token,
			};
		},

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
			const token = generateToken(res);

			return {
				...res._doc,
				id: res._id,
				token,
			};
		},
	},
};

module.exports = resolvers;
