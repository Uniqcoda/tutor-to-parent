import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Image, Menu } from 'semantic-ui-react';

import NavBar from '../navbar/NavBar';
import { AuthContext } from '../../context/auth';

const GeneralDashborad = () => {
	const { user } = useContext(AuthContext);

	const showProfileDetails = event => {};
	const showMyRequests = event => {};
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
						<NavBar />
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
							<Link to='' onClick={showSchedule} className='item'>
								My Schedule
							</Link>
							<Link to='' onClick={showContacts} className='item'>
								My Contacts
							</Link>
							<Link to='' onClick={showMyRequests} className='item'>
								My Requests
							</Link>
							{user.userRole === 'general' ? (
								<Link to='/become-a-tutor' className='item'>
									Become a tutor
								</Link>
							) : null}
							<Link to='' className='item'>
								Others
							</Link>
							{user.userRole === 'tutor' ? (
								<Link to='' className='item'>
									Upload certificates
								</Link>
							) : null}
							<Link to='/' className='item'>
								Delete account
							</Link>
						</Menu>
					</Grid.Column>
					<Grid.Column width={14} style={{ overflowY: 'scroll', height: '50rem', paddingTop: '1.5rem' }}>
						<Grid className='ui two column stackable grid'>
							<Grid.Row>
								<Grid.Column className='ui aligned'>
									<Segment>
										<Image src='/assets/profileimage.svg' style={{ width: '50%', margin: '0 25%' }} />
										<Header as='h2' className='ui center aligned'>
											{user.firstName} {user.lastName}
										</Header>
										<Grid className='ui two column stackable grid'>
											<Grid.Row>
												<Grid.Column>
													<p>
														<i className='icon mail' /> {user.email}
													</p>
												</Grid.Column>
												<Grid.Column>
													<p>
														<i className='icon phone' /> {user.phone}
													</p>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row>
												<Grid.Column>
													<p>
														<i className='icon user' /> {user.gender}
													</p>
												</Grid.Column>
												<Grid.Column>
													<p>
														<i className='icon map marker alternate' /> {user.location}, {user.stateOfRes}
													</p>
												</Grid.Column>
											</Grid.Row>
										</Grid>
									</Segment>
								</Grid.Column>
								<Grid.Column>
									<Segment>
										<Header as='h3' className='ui center aligned'>
											UPCOMING LESSONS
										</Header>
										<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
									</Segment>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Grid className='ui two column stackable grid'>
							<Grid.Row>
								<Grid.Column>
									<Segment>
										<Header as='h3' className='ui center aligned'>
											PENDING REQUESTS
										</Header>
										<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
									</Segment>
								</Grid.Column>
								<Grid.Column>
									<Segment>
										<Header as='h3' className='ui center aligned'>
											CONTACTS
										</Header>
										<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
									</Segment>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Grid className='ui two column stackable grid'>
							{user.userRole === 'tutor' ? (
								<Grid.Row>
									<Grid.Column>
										<Segment>
											<Header as='h3' className='ui center aligned'>
												CERTIFICATION
											</Header>
											<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
										</Segment>
									</Grid.Column>
									<Grid.Column>
										<Segment>
											<Header as='h3' className='ui center aligned'>
												CONTACTS
											</Header>
											<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
										</Segment>
									</Grid.Column>
								</Grid.Row>
							) : null}
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
};

export default GeneralDashborad;
