const gql = require('graphql-tag');

const typeDefs = gql`
	type User {
		id: ID!
		firstName: String
		lastName: String
		email: String
		phone: String
		gender: String
		stateOfRes: String
		location: String
		userRole: String
		createdAt: String
		token: String!
	}
	type TutorRequest {
		id: ID!
		userId: String!
		userEmail: String!
		childFullName: String
		childAge: String
		childGender: String
		childClass: String
		homeAddress: String
		subjects: [String]
		tutorGender: String
		state: String
		location: String
		createdAt: String
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
	input TutorRequestInput {
		childFullName: String!
		childAge: String!
		childGender: String!
		childClass: String!
		homeAddress: String!
		subjects: [String]!
		tutorGender: String!
		state: String!
		location: String!
	}
	type Query {
		getUsers: [User]
		getUser(userId: ID!): User
		getTutorRequests: [TutorRequest]
		getTutorRequest(requestId: ID!): TutorRequest
	}
	type Mutation {
		signUp(signUpInput: SignUpInput): User!
		login(email: String!, password: String!): User!
		deleteUser(userId: ID!): String!
		tutorRequest(tutorRequestInput: TutorRequestInput): TutorRequest!
		deleteRequest(requestId: ID!): String!
	}
`;

module.exports = typeDefs;
