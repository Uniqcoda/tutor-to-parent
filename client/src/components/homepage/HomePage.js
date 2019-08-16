import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Icon } from 'semantic-ui-react';

import NavBar from '../navbar/NavBar';
import Stats from '../statistics/Stats';

export default function HomePage() {
	return (
		<>
			<div>
				<div
					className='ui inverted vertical center aligned segment'
					style={{
						backgroundImage: "url('/assets/school-boy.jpg')",
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						width: '100%',
						minHeight: '700px',
						padding: '0px',
					}}
				>
					<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', width: '100%', minHeight: '700px' }}>
						<header>
							<NavBar/>
						</header>

						<div className='ui text container'>
							<h1
								className='ui inverted header'
								style={{
									fontSize: '4em',
									fontFamily: 'sans-serif',
									fontWeight: 'normal',
									marginBottom: '0px',
									marginTop: '3em',
								}}
							>
								Find a Tutor
							</h1>
							<h2
								className='ui inverted header'
								style={{
									fontSize: '1.5em',
									fontFamily: 'sans-serif',
									fontWeight: 'normal',
									margin: '1em 0',
								}}
							>
								Private lessons/trainings for every child
							</h2>
							<Form>
								<Form.Group>
									<input placeholder='What do you want to learn today?' />
									<Button type='submit' style={{ marginLeft: '2px' }} primary>
										<Icon name='search' />
									</Button>
								</Form.Group>
							</Form>
						</div>
					</div>
				</div>
			</div>
			<main>
				<div style={{ padding: '2em 0em' }} className='ui vertical segment'>
					<div className='ui text container'>
						<Stats />
						<h3 style={{ fontSize: '2em', textAlign: 'center' }} className='ui header'>
							Become a Tutor Today
						</h3>
						<p style={{ fontSize: '1.33em' }}>
							Instead of focusing on content creation and hard work, we have learned how to master the art of doing
							nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
							and worth your attention.
						</p>
						<Link to='/become-a-tutor' className='ui large button' role='button'>
							Sign Up
						</Link>
						<h4 style={{ margin: '3em 0em', textTransform: 'uppercase' }} className='ui horizontal divider header'>
							<Icon name='angle double right' />
						</h4>
						<h3 style={{ fontSize: '2em', textAlign: 'center' }} className='ui header'>
							Get a Tutor
						</h3>
						<p style={{ fontSize: '1.33em' }}>
							Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
							true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
						</p>
						<Link to='/get-a-tutor' className='ui large button' role='button'>
							Register your child
						</Link>
					</div>
				</div>
				<div style={{ padding: '0em' }} className='ui vertical segment'>
					<div className='ui stackable internally celled equal width grid'>
						<div className='center aligned row'>
							<div style={{ paddingBottom: '5em', paddingTop: '5em' }} className='column'>
								<h3 style={{ fontSize: '2em' }} className='ui header'>
									"What a Company"
								</h3>
								<p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
							</div>
							<div style={{ paddingBottom: '5em', paddingTop: '5em' }} className='column'>
								<h3 style={{ fontSize: '2em' }} className='ui header'>
									"I shouldn't have gone with their competitor."
								</h3>
								<p style={{ fontSize: '1.33em' }}>
									<img
										alt='pics'
										src='https://react.semantic-ui.com/images/avatar/large/nan.jpg'
										className='ui avatar image'
									/>
									<b>Nan</b> Chief Fun Officer Acme Toys
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
