import React from 'react';
import NavBar from '../navbar/NavBar';
import { Link } from 'react-router-dom';
import { Segment, Message } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';
import Aside from './Aside';
import './form.css';

export default function TutorSignUp(props) {
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
								<Segment style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
									<h2 style={{ color: '#2185d0', textAlign: 'center' }}>Register as a Tutor</h2>
									<SignUpForm history={props.history} userRole='tutor' />
									<Message style={{ textAlign: 'center' }}>
										Already registered? <Link to='/login'>Login</Link>
									</Message>
								</Segment>
							</section>
							<section className='8 wide column'>
								<Aside />
							</section>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
