import React from 'react';
import NavBar from '../navbar/NavBar';
import RegistrationForm from '../registration-form/RegistrationForm';
import { Segment } from 'semantic-ui-react';

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
					<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.54)', width: '100%', minHeight: '700px' }}>
						<header>
							<NavBar />
						</header>
						<div className='ui one column center aligned page grid' style={{ marginTop: '10px' }}>
							<Segment>
								<h2 style={{ color: '#2185d0', textAlign: 'center' }}>Transform a Child</h2>
								<RegistrationForm />
							</Segment>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
