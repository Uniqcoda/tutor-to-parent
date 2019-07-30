const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs')
const parent = require('./models/Parent');
const { MONGODB } = require('./config');

const resolvers = {
	Query: {
		async getParents() {
			try {
				const parents = await parent.find();
				return parents;
			} catch (error) {
				throw new Error(error);
			}
		},
	},
};


const server = new ApolloServer({
	typeDefs,
	resolvers,
});

mongoose
	.connect(MONGODB, { useNewUrlParser: true })
	.then(() => {
		console.log('MongoDB connected successfully!');

		return server.listen({ port: 5000 });
	})
	.then(res => console.log(`Server running at ${res.url}`));
