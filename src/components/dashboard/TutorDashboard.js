import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Header, Image, Menu } from 'semantic-ui-react';
import NavBar from '../navbar/NavBar';

const TutorDashborad = () => {
	const showProfileDetails = event => {};
	const showTutorRequests = event => {};
	const showSchedule = event => {};
	const showContacts = event => {};

	return (
		<>
			<div
				className='ui inverted vertical center aligned segment'
				style={{
					backgroundImage: "url('/assets/childnteacher.jpg')",
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
					minHeight: '10px',
					padding: '0px',
				}}
			>
				<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.54)', width: '100%', minHeight: '10px' }}>
					<header>
						<NavBar className='ui stackable inverted pointing secondary menu' />
					</header>
				</div>
			</div>
			<Grid>
				<Grid.Row>
					<Grid.Column width={2}>
						<Menu icon='labeled' inverted vertical width='thin' style={{ overflowY: 'scroll', height: '50rem' }}>
							<Image src='/assets/profileimage.svg' style={{ width: '50px', margin: '5px' }} />
							<Link to='' onClick={showProfileDetails} className='item'>
								My Profile
							</Link>
							<Link to='' onClick={showSchedule} className='item'>
								My Schedule
							</Link>
							<Link to='' onClick={showContacts} className='item'>
								My Contacts
							</Link>
							<Link to='' onClick={showTutorRequests} className='item'>
								Tutor Requests
							</Link>
							<Link to='' className='item'>
								Others
							</Link>
							<Link to='' className='item'>
								Others
							</Link>
							<Link to='' className='item'>
								Others
							</Link>
							<Link to='/' className='ui button' role='button'>
								Log out
							</Link>
							<Link to='/' className='ui button' role='button'>
								Sign out
							</Link>
						</Menu>
					</Grid.Column>
					<Grid.Column width={14} style={{ overflowY: 'scroll', height: '50rem' }}>
						<Grid celled>
							<Grid.Row>
								<Grid.Column width={6}>
									<Image src='/assets/profileimage.svg' style={{ width: '200px' }} />
									<Header as='h3'>Sylvia Babalola</Header>
								</Grid.Column>
								<Grid.Column width={6}>
									<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Grid celled>
							<Grid.Row>
								<Grid.Column width={6}>
									<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
								</Grid.Column>
								<Grid.Column width={6}>
									<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
};

export default TutorDashborad;
