import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_REQUEST_QUERY } from '../../utils/graphql';

const ADD_REQUEST = gql`
	mutation tutorRequest(
		$childFullName: String!
		$childAge: String!
		$childGender: String!
		$childClass: String!
		$homeAddress: String!
		$subjects: [String]!
		$tutorGender: String!
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
			createdAt
		}
	}
`;

function AddRequestForm(props) {

	const selectLocation = [
		{ key: 'l', text: 'Lekki', value: 'Lekki' },
		{ key: 'i', text: 'Ikeja', value: 'Ikeja' },
		{ key: 'a', text: 'Apapa', value: 'Apapa' }
	];

	const selectGender = [
		{ key: 'm', text: 'Male', value: 'Male' },
		{ key: 'f', text: 'Female', value: 'Female' },
		{ key: 'o', text: 'Others', value: 'Others' }
	];

	const [errors, setErrors] = useState({});

	const initialValues = {
		childFullName: '',
		childAge: '0',
		childGender: '',
		childClass: '',
		homeAddress: '',
		subjects: '',
		tutorGender: '',
		location: ''
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
			console.log(tutorRequests);
			
			proxy.writeQuery({ query: FETCH_REQUEST_QUERY, tutorRequests });
			
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
			console.log(errors);
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
						label='Home Address'
						id='homeAddress'
						placeholder='Address'
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
						label="Tutors's Gender"
						name='tutorGender'
						options={selectGender}
						placeholder='Gender'
						error={errors.tutorGender ? true : false}
						onChange={onChange}
					/>
					<Form.Select
						label='Location'
						name='location'
						options={selectLocation}
						placeholder='location'
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
