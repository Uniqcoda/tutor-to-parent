import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import Axios from 'axios';

function LoginForm(props) {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const onChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const onSubmit = event => {
		event.preventDefault();
		// alert(`Login with ${values.email}`);
		Axios.get(`http://localhost:3000/users?email=${values.email}`)
			.then(data => data.data)
			.then(user => {

				if (user[0].password === values.password) {
					// console.log(user[0]);
					alert(`Welcome ${user[0].firstName}`);
					props.history.push('/user-dashboard');
				} else {
					alert('email or password incorrect');
				}
			})
			.catch(err => alert('email is incorrect'));
	};

	return (
		<div>
			<Segment>
				<Form size='large' onSubmit={onSubmit}>
					<Form.Input
						fluid
						icon='mail'
						label='Email'
						id='email'
						placeholder='Email address'
						name='email'
						value={values.email}
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
		</div>
	);
}

export default withRouter(LoginForm);
