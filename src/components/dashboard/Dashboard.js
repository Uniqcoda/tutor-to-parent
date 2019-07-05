import React, { useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react';

export default function Dashboard() {
	const [visible, setVisible] = useState(false);
	const segmentRef = createRef();

	const handleHideClick = () => setVisible(false);
	const handleShowClick = () => setVisible(true);
	const handleSidebarHide = () => setVisible(false);
	const showProfileDetails = event => {};

	return (
		<div>
			<Button.Group>
				<Button disabled={visible} onClick={handleShowClick}>
					Show sidebar
				</Button>
				<Button disabled={!visible} onClick={handleHideClick}>
					Hide sidebar
				</Button>
			</Button.Group>

			<Sidebar.Pushable as={Segment.Group} raised>
				<Sidebar
					as={Menu}
					animation='overlay'
					icon='labeled'
					inverted
					onHide={handleSidebarHide}
					vertical
					target={segmentRef}
					visible={visible}
					width='thin'
					style={{ flex: '1', overflowY: 'scroll' }}
				>
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
					<Link to='/' className='ui inverted button' role='button'>
						Log out
					</Link>
					<div className='item'> </div>
					<Link to='/#' onClick={showProfileDetails} className='item'>
						My Profile
					</Link>
				</Sidebar>
				<Ref innerRef={segmentRef}>
					<Segment>
						<Header as='h3'>Clickable area</Header>
						<p>When you will click there, the sidebar will be closed.</p>
					</Segment>
				</Ref>

				<Segment>
					<Header as='h3'>Application Content</Header>
					<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
				</Segment>
			</Sidebar.Pushable>
		</div>
	);
}
