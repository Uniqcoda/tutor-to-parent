import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({className, style}) {
	return (
		<div className={className} style={style}>
			<div className='ui container'>
				<Link to='/' className='item'>
					Upthrust Tutors
				</Link>
				<Link to='/become-a-tutor' className='item'>
					Become a Tutor
				</Link>
				<Link to='/get-a-tutor' className='item'>
					Get a Tutor
				</Link>
				<Link to='/contact-us' className='item'>
					Contact
				</Link>
				<div className='right item'>
					<Link to='/login' style={{ backgroundColor: '#b32424' }} className='ui inverted button' role='button'>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
}
