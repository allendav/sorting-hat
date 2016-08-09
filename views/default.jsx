import React from 'react';

const defaultview = React.createClass( {

	render: function() {
		return (
			<html>
				<head>
					<meta charSet="utf-8"></meta>
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
					<title>Sorting Hat</title>
					<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet"></link>
					<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'></link>
					<link href='css/style.css' rel='stylesheet' type='text/css'></link>
				</head>
				<body>
					<div id="root"></div>
					<script src="js/bundle.js"></script>
				</body>
			</html>
		);
	}
} );

module.exports = defaultview;
