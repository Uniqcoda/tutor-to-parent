const gql = require('graphql-tag');

const typeDefs = gql`
	type User {
		id: ID!
		firstName: String
		lastName: String
		email: String!
		phone: String
		gender: String
		stateOfRes: String
		location: String
		userRole: String!
		createdAt: String
		token: String!
	}
	input SignUpInput {
		firstName: String!
		lastName: String!
		email: String!
		phone: String!
		gender: String!
		stateOfRes: String!
		location: String!
		password: String!
		confirmPassword: String!
		userRole: String!
	}
	type Query {
		getUsers: [User]
		getUser(userId: ID!): User
	}
	type Mutation {
		signUp(signUpInput: SignUpInput): User!
		login(email: String!, password: String!): User!
		deleteUser(userId: ID!): String!
	}
`;

module.exports = typeDefs;
