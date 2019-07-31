const gql = require('graphql-tag');

const typeDefs = gql`
	type Parent {
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
	input ParentSignUpInput {
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
		getParents: [Parent]
		getParent(parentId: ID!): Parent
	}
	type Mutation {
		parentSignUp(parentSignUpInput: ParentSignUpInput): Parent!
		login(email: String!, password: String!): Parent!
	}
`;

module.exports = typeDefs;
