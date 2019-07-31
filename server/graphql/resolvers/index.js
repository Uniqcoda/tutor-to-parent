const parentResolvers = require('./parent');
const tutorResolvers = require('./tutor');

module.exports = {
	Query: {
		...parentResolvers.Query,
	},
	Mutation: {
		...parentResolvers.Mutation,
	},
};
