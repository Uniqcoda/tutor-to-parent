import React from 'react';
import NavBar from '../navbar/NavBar';
import ParentRegistrationForm from './ParentRegistrationForm';

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
							<NavBar />
						</header>
						<div className='ui one column stackable left aligned page grid' style={{ marginTop: '10px' }}>
							<ParentRegistrationForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
