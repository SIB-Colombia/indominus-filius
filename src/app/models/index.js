'use strict';

exports = module.exports = function(mongoose) {
	return {
		User: require('./user')('user', mongoose),
		VerificationToken: require('./verification-token')('verificationtoken', mongoose)
	};
};
