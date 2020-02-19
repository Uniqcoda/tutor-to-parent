import React from 'react';
import NavBar from '../navbar/NavBar';

export default function ContactPage() {
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
			<div>
				<p>This is the contact page</p>
			</div>
		</>
	);
}
