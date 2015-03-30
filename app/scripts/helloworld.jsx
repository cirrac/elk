/** @jsx React.DOM */
var React = require('react');


var hello = React.render(<h1>Hello, world!</h1>,
	document.getElementById('example') 
); 


module.exports = hello;