const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server-express');

const {
	validateSignUpInput,
	validateLoginInput
} = require('../../util/validators');
// const { SECRET_KEY } = require('../../config');
const User = require('../../models/User');

require('dotenv').config();
process.env = JSON.parse(JSON.stringify(process.env));

const SECRET_KEY = process.env.SECRET;
function generateToken(user) {
	return jwt.sign(
		{
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			phone: user.phone,
			gender: user.gender,
			stateOfRes: user.stateOfRes,
			location: user.location,
			userRole: user.userRole
		},
		SECRET_KEY,
		{ expiresIn: '1h' }
	);
}

const resolvers = {
	Query: {
		async getUsers() {
			try {
				const users = await User.find();
				return users;
			} catch (error) {
				throw new Error(error);
			}
		},
		async getUser(_, { userId }) {
			try {
				const user = await User.findById(userId);
				if (user) {
					return user;
				} else {
					throw new Error('User not found');
				}
			} catch (error) {
				throw new Error(error);
			}
		}
	},

	Mutation: {
		async login(_, { email, password }) {
			const { errors, valid } = validateLoginInput(email, password);
			if (!valid) {
				throw new UserInputError('Errors', { errors });
			}
			const user = await User.findOne({ email });

			if (!user) {
				errors.general = 'User not found';
				throw new UserInputError('User not found', { errors });
			}
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				errors.general = 'Wrong user details';
				throw new UserInputError('Wrong user details', { errors });
			}
			const token = generateToken(user);

			return {
				...user._doc,
				id: user._id,
				token
			};
		},

		async signUp(
			_,
			{
				signUpInput: {
					firstName,
					lastName,
					email,
					phone,
					gender,
					stateOfRes,
					location,
					password,
					confirmPassword,
					userRole
				}
			}
		) {
			//validate user data
			const { errors, valid } = validateSignUpInput(
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

			// make sure user doesn't already exist
			const user = await User.findOne({ email });
			if (user) {
				throw new UserInputError('email already exists in database', {
					errors: {
						email: 'This email already exists in database'
					}
				});
			}

			// hash password and create an auth token
			password = await bcrypt.hash(password, 12);
			const newUser = new User({
				firstName,
				lastName,
				email,
				phone,
				gender,
				stateOfRes,
				location,
				password,
				userRole,
				createdAt: new Date().toISOString()
			});
			const res = await newUser.save();
			const token = generateToken(res);

			return {
				...res._doc,
				id: res._id,
				token
			};
		}
	}
};

module.exports = resolvers;
