import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

function RegistrationForm() {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		gender: '',
		stateOfResidence: '',
		location: '',
		password: '',
		confirmPassword: '',
	});

	const onChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const onSubmit = event => {
		event.preventDefault();
		alert(`Your sign-up details are:
		First Name: ${values.firstName};
		Last Name: ${values.lastName};
		Email: ${values.email};
		Phone: ${values.phone};
		Gender: ${values.gender};
		State of Residence: ${values.stateOfResidence};
		Location: ${values.location};
		`);
	};

	return (
		<Form size='large' style={{ backgroundColor: 'white' }} onSubmit={onSubmit}>
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
					placeholder='Email Address'
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
					type='password'
					label='Password'
					id='password'
					placeholder='Password'
					name='password'
					value={values.password}
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
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Select label='State of Residence' id='stateOfResidence' control='select'>
					<option value=''>Select State</option>
					<option value='lagos'>Lagos</option>
					<option value='abuja'>Abuja</option>
					<option value='rivers'>Rivers</option>
				</Form.Select>
				<Form.Select label='Location' id='location' control='select'>
					<option value=''>Select Location</option>
					<option value='ikeja'>Ikeja</option>
					<option value='victoria-island'>Victoria Island</option>
					<option value='ajah'>Ajah</option>
				</Form.Select>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Select label='Gender' id='gender' control='select'>
					<option value=''>Select Gender</option>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
					<option value='other'>Other</option>
				</Form.Select>
				<Form.Checkbox label='By registering, you agree to our terms and policies' />
			</Form.Group>
			<Button color='blue' fluid size='large'>
				Submit
			</Button>
		</Form>
	);
}

export default RegistrationForm;
