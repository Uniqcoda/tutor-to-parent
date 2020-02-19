import React from 'react';
import { Statistic } from 'semantic-ui-react';

export default function Stats() {
	return (
		<div>
			<Statistic.Group style={{padding: '2em 1em'}} widths='three'>
				<Statistic  color='green' size='small'>
					<Statistic.Value>304</Statistic.Value>
					<Statistic.Label>Requests</Statistic.Label>
				</Statistic>
				<Statistic  color='red' size='small'>
					<Statistic.Value>1,200</Statistic.Value>
					<Statistic.Label>Lessons</Statistic.Label>
				</Statistic>
				<Statistic color='blue' size='small'>
					<Statistic.Value >75</Statistic.Value>
					<Statistic.Label>Tutors</Statistic.Label>
				</Statistic>
			</Statistic.Group>
		</div>
	);
}
