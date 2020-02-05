import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
	user: null,
	tutorRequest: null
};

if (localStorage.getItem('jwtToken')) {
	const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

	if (decodedToken.exp * 1000 < Date.now()) {
		localStorage.removeItem('jwtToken');
	} else {
		initialState.user = decodedToken;
	}
}

const AuthContext = createContext({
	user: null,
	login: userData => {},
	logout: () => {},
	tutorRequest: null,
	addTutorRequest: requestData => {}
});

function authReducer(state, action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload
			};
		case 'LOGOUT':
			return {
				...state,
				user: null
			};
		case 'TUTORREQUEST':
			return {
				...state,
				tutorRequest: action.payload
			};

		default:
			return state;
	}
}

function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	function login(userData) {
		localStorage.setItem('jwtToken', userData.token);
		dispatch({ type: 'LOGIN', payload: userData });
	}
	function addTutorRequest(requestData) {
		// localStorage.setItem('jwtToken', userData.token);
		dispatch({ type: 'TUTORREQUEST', payload: requestData });
	}
	function logout() {
		localStorage.removeItem('jwtToken');
		dispatch({ type: 'LOGOUT' });
	}
	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				tutorRequest: state.tutorRequest,
				login,
				logout,
				addTutorRequest
			}}
			{...props}
		/>
	);
}

export { AuthContext, AuthProvider };
