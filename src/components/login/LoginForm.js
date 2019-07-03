import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Message, Segment } from 'semantic-ui-react';

export default function LoginForm() {
	return (
		<div>
			<Segment>
				<Form size='large'>
					<Form.Input fluid icon='user' label='Email' id='email' placeholder='Email address' />
					<Form.Input fluid icon='lock' label='Password' id='password' placeholder='Password' type='password' />

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
