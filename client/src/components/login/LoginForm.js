import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const LOG_IN = gql`
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

function LoginForm(props) {
	const [errors, setErrors] = useState({});

	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		gender: '',
		stateOfRes: '',
		location: '',
		password: '',
		confirmPassword: '',
		userRole: props.userRole,
	});

	const onChange = (event, { name, value }) => {
		setValues({ ...values, [name]: value });
	};

	const [data, { loading }] = useMutation(LOG_IN, {
		update(_, result) {
			props.history.push('/tutor-requests');
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
		variables: values,
	});

	const onSubmit = event => {
		event.preventDefault();
		data();
	};
	return (
		<div>
			<Segment>
				<Form className={loading ? 'loading' : ''} size='large' onSubmit={onSubmit}>
					<Form.Input
						fluid
						icon='mail'
						label='Email'
						id='email'
						placeholder='Email address'
						name='email'
						value={values.email}
						error={errors.email ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						icon='lock'
						label='Password'
						id='password'
						placeholder='Password'
						type='password'
						name='password'
						value={values.password}
						error={errors.password ? true : false}
						onChange={onChange}
					/>

					<Button color='blue' fluid size='large'>
						Login
					</Button>
				</Form>
			</Segment>
			<Message style={{ textAlign: 'center' }}>
				Not registered yet? <Link to='/become-a-tutor'>Sign Up as a Tutor</Link> |{' '}
				<Link to='/get-a-tutor'>Sign Up as a Parent</Link>
			</Message>
			{Object.keys(errors).length > 0 && (
				<div className='ui error message'>
					<ul className='list'>
						{Object.values(errors).map((value, index) => (
							<li key={index}>{value}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default withRouter(LoginForm);
