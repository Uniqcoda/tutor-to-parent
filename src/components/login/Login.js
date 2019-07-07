import React from 'react';
import NavBar from '../navbar/NavBar';
import LoginForm from './LoginForm';

export default function Login() {
	return (
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
						<NavBar className='ui stackable inverted pointing secondary menu'/>
					</header>
						<div className='ui one column stackable center aligned page grid' style={{marginTop: '10px'}}>
							<LoginForm />
						</div>
				</div>
			</div>
		</div>
	);
}
