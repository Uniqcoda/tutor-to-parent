import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';


function SignUpForm({ userRole, history }) {
	const selectState = [
		{ key: 'l', text: 'Lagos', value: 'Lagos' },
		{ key: 'e', text: 'Enugu', value: 'Enugu' },
		{ key: 'a', text: 'Abuja', value: 'Abuja' },
	];

	const selectLocation = [
		{ key: 'l', text: 'Lekki', value: 'Lekki' },
		{ key: 'i', text: 'Ikeja', value: 'Ikeja' },
		{ key: 'a', text: 'Apapa', value: 'Apapa' },
	];

	const selectGender = [
		{ key: 'm', text: 'Male', value: 'Male' },
		{ key: 'f', text: 'Female', value: 'Female' },
		{ key: 'o', text: 'Others', value: 'Others' },
	];

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
		userRole: userRole,
	});

	const onChange = (event, { name, value }) => {
		setValues({ ...values, [name]: value });
	};

	const onSubmit = event => {
		if (!values.firstName && !values.lastName) {
			alert('Please enter your first name and last name');
			event.preventDefault();
			return;
		}
		if (!values.email) {
			alert('Please enter your email');
			event.preventDefault();
			return;
		}
		if (!values.phone) {
			alert('Please enter your phone number');
			event.preventDefault();
			return;
		}
		if (!values.password) {
			alert('Please enter your password');
			event.preventDefault();
			return;
		}
		if (values.password !== values.confirmPassword) {
			alert('Password does not match');
			event.preventDefault();
			return;
		}
		if (!values.stateOfRes) {
			alert('Please select your state of residence');
			event.preventDefault();
			return;
		}
		if (!values.location) {
			alert('Please select your location');
			event.preventDefault();
			return;
		}
		if (!values.gender) {
			alert('Please select your gender');
			event.preventDefault();
			return;
		}

		axios.post('http://localhost:3000/users', values).then(() => {
			event.preventDefault();
			alert('Submitted successfully');
			history.push('/login');
		});
	};

	return (
		<form className='ui form' size='large' style={{ backgroundColor: 'white' }} onSubmit={onSubmit}>
			<Form.Group widths='equal'>
				<Form.Input
					fluid
					icon='user'
					label='First name'
					id='firstName'
					placeholder='First name'
					name='firstName'
					value={values.firstName}
					onChange={onChange} required 
				/>
				<Form.Input
					fluid
					icon='user'
					label='Last name'
					id='lastName'
					placeholder='Last name'
					name='lastName'
					value={values.lastName}
					onChange={onChange} required
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
					onChange={onChange} required
				/>
				<Form.Input
					fluid
					icon='phone'
					label='Phone'
					id='phone'
					placeholder='+234'
					name='phone'
					value={values.phone}
					onChange={onChange} required
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
					onChange={onChange} required
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
					onChange={onChange} required
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Select
					label='State of Residence'
					name='stateOfRes'
					options={selectState}
					placeholder='state'
					// value={values.stateOfRes}
					onChange={onChange} required
				/>
				<Form.Select
					label='Location'
					name='location'
					options={selectLocation}
					placeholder='location'
					// value={values.location}
					onChange={onChange} required
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Select
					label='Gender'
					name='gender'
					options={selectGender}
					placeholder='gender'
					// value={values.gender}
					onChange={onChange}
				/>
				<Form.Checkbox label='By registering, you agree to our terms and policies' onChange={onChange} />
			</Form.Group>
			<Button color='blue' fluid size='large'>
				Submit
			</Button>
		</form>
	);
}

export default SignUpForm;
