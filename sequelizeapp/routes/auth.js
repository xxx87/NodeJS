var authController = require('../controllers/authcontroller.js');
// var passport = require('passport')
module.exports = function(app, passport) {

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
 app.post('/signin', function(req, res, next) {
   passport.authenticate('local-signin', function(err, user, info) {
     if (err) {
      console.log(err);
      return next(err);
     }
     if (!user) {
      console.log('ERROR');
      return res.redirect('/signin');
     }
     req.logIn(user, function(err) {
       if (err) {
        console.log('ERROR 2');
        return next(err);
       }
       console.log('успешный редирект');
       return res.redirect('/dashboard');
     });
   })(req, res, next);
 });
	// app.post('/signin', passport.authenticate('local-signin'),
 // function(req, res) {
 //    // If this function gets called, authentication was successful.
 //    // `req.user` contains the authenticated user.
 //    console.log(req.body);
 //    failureFlash: 'Invalid username or password.'
 //    res.redirect('/dashboard');
 //  }
 // // {
	// // 		successRedirect: '/dashboard',
	// // 		failureRedirect: re
	// // 	}
	// );
 app.get('/', authController.home);
}
