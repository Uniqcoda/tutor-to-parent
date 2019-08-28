import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import AddRequestForm from './AddRequestForm';

export default function AddRequestModal() {
	return (
		<Modal trigger={<Button primary>Add Request</Button>} closeIcon>
			<Header content="Child's Details" />
			<Modal.Content scrolling>
				<AddRequestForm />
			</Modal.Content>
		</Modal>
	);
}
