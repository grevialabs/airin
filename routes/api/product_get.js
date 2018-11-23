var express = require('express')
var app = express()

// SHOW LIST OF USERS
// app.get('/api/product_get', function(req, res, next) {
app.get('/testproduct', function(req, res, next) {
	req.getConnection(function(error, conn) {
		rows = 'yameteaa'
		res.render('api/index', {
			title: 'API product List', 
			data: rows
		})
		
		// conn.query('SELECT * FROM product ORDER BY product_id DESC',function(err, rows, fields) {
			// //if(err) throw err
			// if (err) {
				// // console.log(err)
				// req.flash('error', err)
				// res.render('api/list', {
					// title: 'Api Product List', 
					// data: ''
				// })
			// } else {
				// console.log(rows)
				// // render to views/user/list.ejs template file
				// res.render('api/list', {
					// title: 'API product List', 
					// data: rows
				// })
			// }
		// })
	})
})

module.exports = app