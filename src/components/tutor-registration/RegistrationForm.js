import React, { useState } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';

const options = [
	{ key: 'm', text: 'Male', value: 'male' },
	{ key: 'f', text: 'Female', value: 'female' },
	{ key: 'o', text: 'Other', value: 'other' },
];

function RegistrationForm() {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		gender: '',
		password: '',
		confirmPassword: '',
	});

	const onChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const onSubmit = event => {};

	return (
		<Segment>
			<Form size='large' style={{ backgroundColor: 'white' }} onSubmit={onSubmit}>
				<h2 style={{ color: '#2185d0', textAlign: 'center' }}>Change the Narative</h2>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						icon='user'
						label='First name'
						id='firstName'
						placeholder='First name'
						name='firstName'
						value={values.firstName}
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
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input
						fluid
						icon='mail'
						label='Email'
						id='email'
						placeholder='email address'
						name='email'
						value={values.email}
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
						onChange={onChange}
					/>
				</Form.Group>

				<Form.Group widths='equal'>
					<Form.Input
						fluid
						icon='lock'
						label='Password'
						id='password'
						placeholder='Password'
						name='password'
						value={values.firstName}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						icon='lock'
						label='Confirm Password'
						id='confirmPassword'
						placeholder='Confirm Password'
						name='confirmPassword'
						value={values.confirmPassword}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Select fluid label='Gender' id='gender' options={options} placeholder='Gender' />
					<Form.Checkbox label='By registering, you agree to our terms and policies' />
				</Form.Group>
				<Button color='blue' fluid size='large'>
					Join Now
				</Button>
			</Form>
		</Segment>
	);
}

export default RegistrationForm;
