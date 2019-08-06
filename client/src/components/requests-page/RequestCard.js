import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function RequestCard(props) {
	const { id, createdAt, subjects, childGender, childAge, childClass, tutorGender, location } = props.request;

	function genderImage(childGender) {
		if (childGender === 'Male') {
			return '/assets/toml-full.png';
		} else if (childGender === 'Female') {
			return '/assets/susan-full.png';
		}
		return '/assets/profileimage.svg';
	}

	function viewRequest() {
		console.log('view details');
	}

	function deleteRequest() {
		console.log('delete request');
	}

	return (
		<div>
			<Card centered fluid>
				<Card.Content>
					<Image floated='right' size='mini' src={genderImage(childGender)} />
					<Card.Header>Tutor Request</Card.Header>
					<Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
					<Card.Description>
						<p>
							<span>
								<strong> Gender: </strong>
								{childGender}{' '}
							</span>
							<span style={{ marginLeft: '3px' }}>
								<strong>Age: </strong>
								{childAge}{' '}
							</span>
							<span style={{ marginLeft: '3px' }}>
								<strong>Class: </strong>
								{childClass}
							</span>
						</p>
						<p>
							<strong> Tutor Gender: </strong>
							{tutorGender}
						</p>
						<p>
							<strong>Location: </strong>
							{location}
						</p>
						<div>
							<strong>Subjects: </strong>
							{subjects.map((subject, index) => (
								<span key={index}>{subject} </span>
							))}
						</div>
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div className='ui two buttons'>
						<Button as={Link} to={`/tutor-requests/${id}`} onClick={viewRequest} basic size='small' color='green'>
							View
						</Button>
						<Button as={Link} to={`/tutor-requests/${id}`} onClick={deleteRequest} size='small' basic color='red'>
							Delete
						</Button>
					</div>
				</Card.Content>
			</Card>
		</div>
	);
}
