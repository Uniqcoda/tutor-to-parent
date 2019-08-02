const userResolvers = require('./users');
const requestResolvers = require('./tutorRequests')

module.exports = {
	Query: {
		...userResolvers.Query,
		...requestResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...requestResolvers.Mutation,
	},
};
