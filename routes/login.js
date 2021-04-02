var express = require('express')
var app = express()

app.get('/', function(req, res) {

	// if (req.session.loggedin) {
	// 	res.send('youre authorized');
	// } else {
	// 	res.send('intruder alert');
	// }
	// res.end();
	req.session.loggedin = 'yamete'

	// render to views/index.ejs template file
	res.render('login', {
		title: 'Login Form', 
		session: req.session
	})
})

/** 
 * We assign app object to module.exports
 * 
 * module.exports exposes the app object as a module
 * 
 * module.exports should be used to return the object 
 * when this file is required in another module like app.js
 */ 
module.exports = app;