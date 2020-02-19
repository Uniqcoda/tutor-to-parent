import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import { LOG_IN } from '../../utils/graphql';
import { useMutation } from '@apollo/react-hooks';

import { AuthContext } from '../../context/auth';

function LoginForm(props) {
	const context = useContext(AuthContext);
	const [errors, setErrors] = useState({});

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const onChange = (event, { name, value }) => {
		setValues({ ...values, [name]: value });
	};

	const [data, { loading }] = useMutation(LOG_IN, {
		update(_, { data: { login: userData } }) {
			context.login(userData);
			 
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
			<Segment style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
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
			<Message  style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
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
