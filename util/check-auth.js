const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
// const { SECRET_KEY } = require('../config');
require('dotenv').config();
process.env = JSON.parse(JSON.stringify(process.env));

const SECRET_KEY = process.env.SECRET;

module.exports = context => {
	//  context will be an object that will have headers property {... headers}
	const authHeader = context.req.headers.authorization;

	if (authHeader) {
		// Bearer ...
		const token = authHeader.split('Bearer ')[1];
		if (token) {
			try {
				const user = jwt.verify(token, SECRET_KEY);
				return user;
			} catch (error) {
				throw new AuthenticationError('Invalid/Expired token');
			}
		}
		throw new AuthenticationError(
			"Authentication token must be 'Bearer [token]'"
		);
	}
	throw new AuthenticationError('Authorization header must be provided');
};
