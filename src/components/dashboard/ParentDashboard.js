import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Segment, Header, Image, Menu } from 'semantic-ui-react';
import NavBar from '../navbar/NavBar';
import getInfoFromURL from './getInfoFromURL';
import Axios from 'axios';

const TutorDashborad = () => {
	const [userProfile, setUserProfile] = useState({});
	const showProfileDetails = event => {};
	const showMyRequests = event => {};
	const showSchedule = event => {};
	const showContacts = event => {};
	const showMyChildren = event => {};

	const userEmail = getInfoFromURL();

	useEffect(() => {
		Axios.get(`http://localhost:3000/users?email=${userEmail}`)
			.then(data => data.data)
			.then(data => {
				const user = data[0];
				const requiredDetails = {
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					phone: user.phone,
					gender: user.gender,
					stateOfRes: user.stateOfRes,
					location: user.location,
				};
				setUserProfile(requiredDetails);
			});
	}, []);
	console.log(userProfile);

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
						<Menu icon='labeled' inverted pointing vertical style={{ height: '50rem', borderRadius: '0%' }}>
							<Image src='/assets/profileimage.svg' style={{ width: '50%', margin: '0 25%' }} />
							<Link to='' onClick={showProfileDetails} className='item'>
								My Profile
							</Link>
							<Link to='' onClick={showMyChildren} className='item'>
								My Children
							</Link>
							<Link to='' onClick={showSchedule} className='item'>
								My Schedule
							</Link>
							<Link to='' onClick={showContacts} className='item'>
								My Contacts
							</Link>
							<Link to='' onClick={showMyRequests} className='item'>
								My Requests
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
							<Link to='/' className='item'>
								Log out
							</Link>
							<Link to='/' className='item'>
								Delete account
							</Link>
						</Menu>
					</Grid.Column>
					<Grid.Column width={14} style={{ overflowY: 'scroll', height: '50rem', paddingTop: '1.5rem' }}>
						<Grid className='ui two column stackable grid'>
							<Grid.Row>
								<Grid.Column className='ui aligned' width={8}>
									<Segment>
										<Image src='/assets/profileimage.svg' style={{ width: '50%', margin: '0 25%' }} />
										<Header as='h2' className='ui center aligned'>
											{userProfile.firstName} {userProfile.lastName}
										</Header>
										<Grid className='ui two column stackable grid'>
											<Grid.Row>
												<Grid.Column>
													<p>
														<i className='icon mail' /> {userProfile.email}
													</p>
												</Grid.Column>
												<Grid.Column>
													<p>
														<i className='icon phone' /> {userProfile.phone}
													</p>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row>
												<Grid.Column>
													<p>
														<i className='icon user' /> {userProfile.gender}
													</p>
												</Grid.Column>
												<Grid.Column>
													<p>
														<i className='icon map marker alternate' /> {userProfile.location}, {userProfile.stateOfRes}
													</p>
												</Grid.Column>
											</Grid.Row>
										</Grid>
									</Segment>
								</Grid.Column>
								<Grid.Column width={8}>
									<Segment>
										<Header as='h3' className='ui center aligned'>
											MY REQUESTS
										</Header>
										<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
									</Segment>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Grid className='ui two column stackable grid'>
							<Grid.Row>
								<Grid.Column width={8}>
									<Segment>
										<Header as='h3' className='ui center aligned'>
											UPCOMING LESSONS
										</Header>
										<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
									</Segment>
								</Grid.Column>
								<Grid.Column width={8}>
									<Segment>
										<Header as='h3' className='ui center aligned'>
											UPCOMING LESSONS
										</Header>
										<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
									</Segment>
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
