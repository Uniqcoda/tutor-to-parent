import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { AuthProvider } from './context/auth';
import App from './App';
import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
	uri: '/'
});
const authLink = setContext(() => {
	const token = localStorage.getItem('jwtToken');
	return {
		headers: {
			Authorization: token ? `Bearer ${token}` : ''
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<AuthProvider>
			<Router>
				<App />
			</Router>
		</AuthProvider>
	</ApolloProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
