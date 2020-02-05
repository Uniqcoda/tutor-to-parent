import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react';
import NavBar from '../navbar/NavBar';
import RequestCard from './RequestCard';
import Stats from '../statistics/Stats';
import AddRequestModal from '../add-request/AddRequestModal';
import { AuthContext } from '../../context/auth';
import { FETCH_REQUEST_QUERY } from '../../utils/graphql';

// import Pagination from '../pagination/Pagination';

export default function ViewRequests() {
	const { user } = useContext(AuthContext);

	const {
		loading,
		data: { getTutorRequests: tutorRequests }
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
					padding: '0px'
				}}
			>
				<div
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0.54)',
						width: '100%',
						minHeight: '10px'
					}}
				>
					<header>
						<NavBar />
					</header>
				</div>
			</div>
			<div style={{ padding: '0em 2em' }}>
				<Stats />
				{user ? <AddRequestModal /> : null}
				<Grid stackable columns={3}>
					<Grid.Row>
						{loading ? (
							<h3>Loading Requests</h3>
						) : (
							tutorRequests &&
							tutorRequests.map(request => {
								return (
									<Grid.Column
										key={request.id}
										style={{ marginBottom: '20px' }}
									>
										<RequestCard request={request} />
									</Grid.Column>
								);
							})
						)}
					</Grid.Row>
				</Grid>
				{/* <Pagination /> */}
			</div>
		</>
	);
}
