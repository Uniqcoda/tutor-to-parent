import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_REQUEST_QUERY, ADD_REQUEST } from '../../utils/graphql';
import { AuthContext } from '../../context/auth';

import ng_states from '../../states';

function AddRequestForm(props) {
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

	const { user } = useContext(AuthContext);	
	const initialValues = {
		childFullName: '',
		childAge: '0',
		childGender: '',
		childClass: '',
		homeAddress: '',
		subjects: '',
		tutorGender: '',
		state: user.stateOfRes,
		location: user.location
	};

	const [values, setValues] = useState(initialValues);

	const onChange = (event, { name, value }) => {
		setValues({ ...values, [name]: value });
	};

	const [data, { loading }] = useMutation(ADD_REQUEST, {
		update(proxy, { data: { tutorRequest: requestData } }) {
			const tutorRequests = proxy.readQuery({
				query: FETCH_REQUEST_QUERY
			});

			tutorRequests.getTutorRequests = [
				requestData,
				...tutorRequests.getTutorRequests
			];
			setValues(initialValues);

			proxy.writeQuery({ query: FETCH_REQUEST_QUERY, tutorRequests });
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
						label="Child's Full Name"
						icon='user'
						id='childFullName'
						placeholder="Child's full name"
						name='childFullName'
						value={values.childFullName}
						error={errors.childFullName ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						type='number'
						label="Child's Age"
						id='childAge'
						name='childAge'
						value={values.childAge}
						error={errors.childAge ? true : false}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Select
						label="Child's Gender"
						name='childGender'
						options={selectGender}
						placeholder='Gender'
						value={values.childGender}
						error={errors.childGender ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						label="Child's Class"
						id='childClass'
						placeholder='Basic 5'
						name='childClass'
						value={values.childClass}
						error={errors.childClass ? true : false}
						onChange={onChange}
					/>
				</Form.Group>

				<Form.Group widths='equal'>
					<Form.Input
						fluid
						label='Address'
						id='homeAddress'
						placeholder='Address for lessons'
						name='homeAddress'
						value={values.homeAddress}
						error={errors.homeAddress ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						fluid
						label='Subjects'
						id='subjects'
						placeholder='Separate subjects with a comma'
						name='subjects'
						value={values.subjects}
						error={errors.subjects ? true : false}
						onChange={onChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Select
						label="Tutor's Gender"
						name='tutorGender'
						options={selectGender}
						placeholder='Gender'
						value={values.tutorGender}
						error={errors.tutorGender ? true : false}
						onChange={onChange}
					/>
					<Form.Select
						label='State of Residence'
						name='state'
						options={selectState}
						placeholder='state'
						value={values.state}
						error={errors.state ? true : false}
						onChange={onChange}
					/>
					<Form.Select
						label='Location'
						name='location'
						options={getLGAs(values.state)}
						placeholder='location'
						value={values.location}
						error={errors.location ? true : false}
						onChange={onChange}
					/>
				</Form.Group>
				<Button type='submit' color='blue' fluid size='large'>
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

export default AddRequestForm;
