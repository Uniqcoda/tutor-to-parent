import React from 'react';
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import RegistrationForm from '../registration-form/RegistrationForm';
import { Segment, Message } from 'semantic-ui-react';
export default function ParentRegistration() {
	return (
		<>
			<div>
				<div
					className='ui inverted vertical aligned segment'
					style={{
						backgroundImage: "url('/assets/children-in-school.jpg')",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						width: '100%',
						minHeight: '700px',
						padding: '0px',
					}}
				>
					<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.54)', width: '100%', minHeight: '700px' }}>
						<header>
							<NavBar className='ui stackable inverted pointing secondary menu'/>
						</header>
						<div className='ui one column left aligned page grid' style={{ marginTop: '10px' }}>
							<Segment>
								<h2 style={{ color: '#2185d0', textAlign: 'center' }}>Request for a Tutor</h2>
								<RegistrationForm userRole='parents' />
								<Message style={{ textAlign: 'center' }}>
									Already registered? <Link to='/login'>Login</Link>
								</Message>
							</Segment>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
