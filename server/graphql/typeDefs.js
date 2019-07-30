const gql = require('graphql-tag');

const typeDefs = gql`
	type Parent {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		phone: String!
		gender: String!
		stateOfRes: String!
		location: String!
		password: String!
		userRole: String!
		createdAt: String!
	}
	type Query {
		getParents: [Parent]
	}
`;

module.exports = typeDefs;
