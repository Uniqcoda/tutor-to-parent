import React from 'react';

import NavBar from '../navbar/NavBar';
import LoginForm from './LoginForm';

export default function Login(props) {
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
				<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', minHeight: '700px' }}>
					<header>
						<NavBar/>
					</header>
					<div className='ui one column center aligned page grid' style={{ marginTop: '4em' }}>
						<LoginForm history={props.history} />
					</div>
				</div>
			</div>
		</div>
	);
}
