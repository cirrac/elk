var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var header = React.createClass({

	render: function() {
		return(
		<header>
			<div className='container'>
		        <a href='#' data-activates='slide-out' className='button-collapse top-nav'>
		          <i className='mdi-navigation-menu'></i>
		        </a>
	      </div>
	      <ul id='slide-out' className='side-nav fixed'>
	        <li><a href='#!'><Link to='wall'>Wall</Link></a></li>
	        <li><a href='#!'><Link to='calendar'>Calendar</Link></a></li>
	        <li><a href='#!'><Link to='location'>Location</Link></a></li>
	      </ul>
      </header>
      );
	}
});


module.exports = header;