import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function NavBar() {
	const pathname = window.location.pathname;

	const path = pathname === '/' ? 'upthrust-tutors' : pathname.substr(1);
	const [activeItem, setActiveItem] = useState(path);
	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu style={{ borderWidth: '0px' }} className='ui' stackable inverted pointing secondary>
			<div className='ui container'>
				<Menu.Item
					as={Link}
					name='upthrust-tutors'
					active={activeItem === 'upthrust-tutors'}
					onClick={handleItemClick}
					to='/'
				/>
				<Menu.Item
					as={Link}
					name='become-a-tutor'
					active={activeItem === 'become-a-tutor'}
					onClick={handleItemClick}
					to='/become-a-tutor'
				/>
				<Menu.Item
					as={Link}
					name='get-a-tutor'
					active={activeItem === 'get-a-tutor'}
					onClick={handleItemClick}
					to='/get-a-tutor'
				/>
				<Menu.Item
					as={Link}
					name='tutor-requests'
					active={activeItem === 'tutor-requests'}
					onClick={handleItemClick}
					to='/tutor-requests'
				/>
				<Menu.Item
					as={Link}
					name='contact-us'
					active={activeItem === 'contact-us'}
					onClick={handleItemClick}
					to='/contact-us'
				/>
				<div className='right item'>
					<Link to='/login' style={{ backgroundColor: '#b32424' }} className='ui inverted button' role='button'>
						Login
					</Link>
				</div>
			</div>
		</Menu>
	);
}
