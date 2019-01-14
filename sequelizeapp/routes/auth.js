var authController = require('../controllers/authcontroller.js');
var passport = require('passport')
module.exports = function(app) {

	app.get('/signup', authController.signup);
	app.get('/signin', authController.signin);
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/dashboard',
		failureRedirect: '/signup'
	}));
	app.get('/dashboard', isLoggedIn, authController.dashboard);
	app.get('/logout', authController.logout);

	function isLoggedIn(req, res, next) {
		if(req.isAuthenticated())
			return next();
		res.redirect('/signin');

	}
	app.post('/signin', passport.authenticate('local-signin', {
			successRedirect: '/dashboard',
			failureRedirect: '/signin'
		}
	));
 app.get('/', authController.home);
}
