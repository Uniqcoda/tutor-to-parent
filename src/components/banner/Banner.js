import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

// import NavBar from './components/navbar/NavBar';

export default function Banner() {
	return (
		<>
			<header>{/* <NavBar /> */}</header>
			<div>
				<div className='ui inverted vertical center aligned segment' style={{ minHeight: '700px', padding: '1em 0em' }}>
					<div className='ui large inverted pointing secondary menu'>
						<div className='ui container'>
							<Link className='active item'>Home</Link>
							<Link className='item'>Become a Coach</Link>
							<Link className='item'>Get a Coach</Link>
							<Link className='item'>Contact</Link>
							<div className='right item'>
								<Link className='ui inverted button' role='button'>
									Log in
								</Link>
							</div>
						</div>
					</div>
					<div className='ui text container'>
						<h1
							className='ui inverted header'
							style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: '0px', marginTop: '3em' }}
						>
							Find a Coach
						</h1>
						<h2 className='ui inverted header' style={{ fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em' }}>
							Private lessons/trainings for every child
						</h2>
						<Form>
							<Form.Field>
								<input placeholder='What do you want to learn?' />
							</Form.Field>
							<Button type='submit' primary>
								Search
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}
