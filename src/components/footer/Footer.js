import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div style={{ padding: '5em 0em' }} className='ui inverted vertical segment'>
			<div className='ui container'>
				<div className='ui inverted stackable divided grid'>
					<div className='row'>
						<div className='three wide column'>
							<div role='list' className='ui inverted link list'>
								<Link role='listitem' className='item'>
									Contact Us
								</Link>
								<Link role='listitem' className='item'>
									About
								</Link>
								<Link role='listitem' className='item'>
                Frequently Asked Questions
								</Link>
                <Link role='listitem' className='item'>
									Privacy Policy
								</Link>
							</div>
						</div>
						<div className='three wide column'>
							<div role='list' className='ui inverted link list'>
								<Link role='listitem' className='item'>
                Become a Tutor
								</Link>
								<Link role='listitem' className='item'>
                Get a Tutor
								</Link>
								<Link role='listitem' className='item'>
									Become a scout partner
								</Link>
								<Link role='listitem' className='item'>
									Privacy Policy
								</Link>
							</div>
						</div>
						<div className='seven wide column'>
							<h4 className='ui inverted header'>Upthrust Tutors</h4>
							<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
