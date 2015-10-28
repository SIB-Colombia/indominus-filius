'use strict';

/**
 * Resolves URL /language/:newlanguage
 * @param  {Object} Request params
 * @param  {Object} Response params
 */
exports.changeLanguage = function() {
	return function(req, res) {
		res.cookie('locale', req.params._newlanguage, {maxAge: 900000, httpOnly: true});
		req.setLocale(req.params._newlanguage);
		//res.locals.currentLocale = req.params._newlanguage;

		// redirect back
		res.redirect('back');
	};
};
