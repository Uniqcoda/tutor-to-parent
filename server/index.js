const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers/index');
const typeDefs = require('./graphql/typeDefs');
const { MONGODB } = require('./config');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req }),
});

mongoose
	.connect(MONGODB, { useNewUrlParser: true })
	.then(() => {
		console.log('MongoDB connected successfully!');

		return server.listen({ port: 5000 });
	})
	.then(res => console.log(`Server running at ${res.url}`));
