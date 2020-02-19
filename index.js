const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const express = require('express');
const resolvers = require('./graphql/resolvers/index');
const typeDefs = require('./graphql/typeDefs');
// const { MONGODB } = require('./config');
require('dotenv').config();
process.env = JSON.parse(JSON.stringify(process.env));

const MONGODB = process.env.MONGODB;

const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req })
});

server.applyMiddleware({
	app
});
const clientPath = path.join(__dirname, 'client/build');

console.log(clientPath);

if (fs.existsSync(clientPath)) {
	app.use(express.static(clientPath));
	app.get('/', (_req, res) => {
		res.sendFile(path.join(clientPath, 'index.html'));
	});
}
mongoose
	.connect(MONGODB, { useNewUrlParser: true })
	.then(() => {
		console.log('MongoDB connected successfully!');

		return app.listen({ port: 5001 });
	})
	.then(res => console.log(`Server running at ${res.url}`));
