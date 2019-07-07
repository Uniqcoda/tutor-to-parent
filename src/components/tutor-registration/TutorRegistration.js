import React from 'react';
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import RegistrationForm from '../registration-form/RegistrationForm';
import { Segment, Message } from 'semantic-ui-react';
import Aside from '../registration-form/Aside';

export default function TutorRegistration() {
	return (
		<>
			<div>
				<div
					className='ui inverted vertical aligned segment'
					style={{
						backgroundImage: "url('/assets/childnteacher.jpg')",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						width: '100%',
						minHeight: '700px',
						padding: '0px',
					}}
				>
					<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', minHeight: '700px' }}>
						<header>
							<NavBar className='ui stackable inverted pointing secondary menu' />
						</header>
						<div className='ui two column stackable grid' style={{ marginTop: '10px' }}>
							<section className='8 wide column'>
								<Aside />
							</section>
							<section className='8 wide column'>
								<Segment>
									<h2 style={{ color: '#2185d0', textAlign: 'center' }}>Become a Tutor</h2>
									<RegistrationForm userRole='tutor' />
									<Message style={{ textAlign: 'center' }}>
										Already registered? <Link to='/login'>Login</Link>
									</Message>
								</Segment>
							</section>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
