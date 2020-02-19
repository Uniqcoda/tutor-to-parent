import gql from 'graphql-tag';

export const SIGN_UP = gql`
	mutation signUp(
		$firstName: String!
		$lastName: String!
		$email: String!
		$phone: String!
		$gender: String!
		$stateOfRes: String!
		$location: String!
		$password: String!
		$confirmPassword: String!
		$userRole: String!
	) {
		signUp(
			signUpInput: {
				firstName: $firstName
				lastName: $lastName
				email: $email
				phone: $phone
				gender: $gender
				stateOfRes: $stateOfRes
				location: $location
				password: $password
				confirmPassword: $confirmPassword
				userRole: $userRole
			}
		) {
			id
			firstName
			lastName
			email
			phone
			gender
			stateOfRes
			location
			userRole
			createdAt
			token
		}
	}
`;

export const LOG_IN = gql`
	mutation signUp($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			firstName
			lastName
			email
			phone
			gender
			stateOfRes
			location
			userRole
			createdAt
			token
		}
	}
`;

export const FETCH_REQUEST_QUERY = gql`
	{
		getTutorRequests {
			id
			userId
			childFullName
			childAge
			childGender
			childClass
			subjects
			tutorGender
			state
			location
			createdAt
		}
	}
`;

export const ADD_REQUEST = gql`
	mutation tutorRequest(
		$childFullName: String!
		$childAge: String!
		$childGender: String!
		$childClass: String!
		$homeAddress: String!
		$subjects: [String]!
		$tutorGender: String!
		$state: String!
		$location: String!
	) {
		tutorRequest(
			tutorRequestInput: {
				childFullName: $childFullName
				childAge: $childAge
				childGender: $childGender
				childClass: $childClass
				homeAddress: $homeAddress
				subjects: $subjects
				tutorGender: $tutorGender
				state: $state
				location: $location
			}
		) {
			id
			userId
			userEmail
			childFullName
			childAge
			childGender
			childClass
			homeAddress
			subjects
			tutorGender
			state
			location
			createdAt
		}
	}
`;
