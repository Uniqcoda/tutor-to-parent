import ng_states from './states';

export const selectState = [];
ng_states.forEach(state => {
	selectState.push({
		key: state.id,
		text: state.name,
		value: state.name
	});
});

export const getLGAs = stateName => {
	const selectLocation = [];
	for (let i = 0; i < ng_states.length; i++) {
		if (ng_states[i].name === stateName) {
			ng_states[i].locals.forEach(local => {
				selectLocation.push({
					key: local.id,
					text: local.name,
					value: local.name
				});
			});
			return selectLocation;
		}
	}
	return [{ key: 1, text: 'None', value: 'None' }];
};

export const selectGender = [
	{ key: 'm', text: 'Male', value: 'Male' },
	{ key: 'f', text: 'Female', value: 'Female' },
	{ key: 'o', text: 'Others', value: 'Others' }
];
