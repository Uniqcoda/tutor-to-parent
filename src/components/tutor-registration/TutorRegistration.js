import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Icon } from 'semantic-ui-react';
import NavBar from '../navbar/NavBar';
import RegistrationForm from './RegistrationForm';

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

						<div className='ui two column stackable grid'>
							<div className='column'>
								<h1
									className='ui inverted header'
									style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: '0px', marginTop: '3em' }}
								>
									{/* This is the registration page */}
								</h1>
							</div>
							<div className='column'>
								<RegistrationForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
