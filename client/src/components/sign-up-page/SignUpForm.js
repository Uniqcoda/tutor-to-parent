import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { AuthContext } from '../../context/auth';
import ng_states from '../../states';

const SIGN_UP = gql`
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

function SignUpForm(props) {
	const context = useContext(AuthContext);

	const selectState = [];
	ng_states.forEach(state => {
		selectState.push({
			key: state.id,
			text: state.name,
			value: state.name
		});
	});

	const getLGAs = stateName => {
		const selectLocation = [];
		for (let i = 0; i < ng_states.length; i++) {
			if (ng_states[i].name === stateName) {
				ng_states[i].locals.forEach(local => {
					selectLocation.push({
						key: local.id,
						text: local.name,
						value: local.name
					});
				});
				return selectLocation;
			}
		}
		return [{ key: 1, text: 'None', value: 'None' }];
	};

	const selectGender = [
		{ key: 'm', text: 'Male', value: 'Male' },
		{ key: 'f', text: 'Female', value: 'Female' },
		{ key: 'o', text: 'Others', value: 'Others' }
	];

	const [errors, setErrors] = useState({});

	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		gender: '',
		stateOfRes: "",
		location: "",
		password: '',
		confirmPassword: '',
		userRole: props.userRole
	});

	const onChange = (event, { name, value }) => {
		setValues({ ...values, [name]: value });
	};

	const [data, { loading }] = useMutation(SIGN_UP, {
		update(_, { data: { signUp: userData } }) {
			context.login(userData);
			props.history.push('/dashboard');
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
		variables: values
	});

	const onSubmit = event => {
		event.preventDefault();
		data();
	};

	return (
		<>
			<form
				className={loading ? 'ui form loading' : 'ui form'}
				size='large'
				onSubmit={onSubmit}
			>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						icon='user'
						label='First name'
						id='firstName'
						placeholder='First name'
						name='firstName'
						value={values.firstName}
						error={errors.firstName ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						icon='user'
						label='Last name'
						id='lastName'
						placeholder='Last name'
						name='lastName'
						value={values.lastName}
						error={errors.lastName ? true : false}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						icon='mail'
						label='Email'
						id='email'
						placeholder='Email Address'
						name='email'
						value={values.email}
						error={errors.email ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						icon='phone'
						label='Phone'
						id='phone'
						placeholder='+234'
						name='phone'
						value={values.phone}
						error={errors.phone ? true : false}
						onChange={onChange}
					/>
				</Form.Group>

				<Form.Group widths='equal'>
					<Form.Input
						fluid
						icon='lock'
						type='password'
						label='Password'
						id='password'
						placeholder='Password'
						name='password'
						value={values.password}
						error={errors.password ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						icon='lock'
						type='password'
						label='Confirm Password'
						id='confirmPassword'
						placeholder='Confirm Password'
						name='confirmPassword'
						value={values.confirmPassword}
						error={errors.confirmPassword ? true : false}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Select
						label='State of Residence'
						name='stateOfRes'
						options={selectState}
						placeholder='state'
						value={values.stateOfRes}
						error={errors.stateOfRes ? true : false}
						onChange={onChange}
					/>
					<Form.Select
						label='Location'
						name='location'
						options={getLGAs(values.stateOfRes)}
						placeholder='location'
						value={values.location}
						error={errors.location ? true : false}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Select
						label='Gender'
						name='gender'
						options={selectGender}
						placeholder='gender'
						value={values.gender}
						error={errors.gender ? true : false}
						onChange={onChange}
					/>
					<Form.Checkbox
						label='By registering, you agree to our terms and policies'
						required
					/>
				</Form.Group>
				<Button color='blue' fluid size='large'>
					Submit
				</Button>
			</form>
			{Object.keys(errors).length > 0 && (
				<div className='ui error message'>
					<ul className='list'>
						{Object.values(errors).map((value, index) => (
							<li key={index}>{value}</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

export default SignUpForm;
