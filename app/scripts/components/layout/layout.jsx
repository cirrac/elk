/** @jsx React.DOM */
var React = require('react');
var Header = require('./header.jsx');
var Content = require('./content.jsx');


var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var Locate = require('../location/location.jsx');
var Calendar = require('../calendar/calendar.jsx');
var Wall = require('../wall/wall.jsx');
 
/*var App = React.render(
	<div> 
		<Header></Header>
		<Content>
		<RouteHandler/>
		</Content>
		<footer></footer>
	</div>, 
	document.body);
*/

var App = React.createClass({
	render : function() {
		return(<div> 
			<Header></Header>
			<Content>
			<RouteHandler/>
			</Content>
			<footer></footer>
		</div>
		)
		}
	});


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="location" handler={Locate}/>
    <Route name="calendar" handler={Calendar}/>
    <Route name="wall" handler={Wall}/>
    <DefaultRoute handler={Wall}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
 