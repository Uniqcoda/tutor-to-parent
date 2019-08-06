import React from 'react';
import NavBar from '../navbar/NavBar';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react';
import RequestCard from './RequestCard';
import Stats from '../statistics/Stats';
// import Pagination from '../pagination/Pagination';

const FETCH_REQUEST_QUERY = gql`
	{
		getTutorRequests {
			id
			userId
			childFullName
			childAge
			childGender
			childClass
			subjects
			tutorGender
			location
			createdAt
		}
	}
`;

export default function ViewRequests() {
	const {
		loading,
		data: { getTutorRequests: tutorRequests },
	} = useQuery(FETCH_REQUEST_QUERY);

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
						<NavBar className='ui stackable inverted pointing secondary menu' />
					</header>
				</div>
			</div>
			<div style={{ padding: '0em 2em' }}>
				<Stats />
				<Grid stackable columns={3}>
					<Grid.Row />
					<Grid.Row>
						{loading ? (
							<h3>Loading Requests</h3>
						) : (
							tutorRequests &&
							tutorRequests.map(request => {
								return (
									<Grid.Column key={request.id} style={{ marginBottom: '20px' }}>
										<RequestCard request={request} />
									</Grid.Column>
								);
							})
						)}
					</Grid.Row>
				</Grid>{' '}
				{/* <Pagination /> */}
			</div>
		</>
	);
}
