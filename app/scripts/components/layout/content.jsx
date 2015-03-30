var React = require('react');
//require('./helloworld.jsx');


var content = React.createClass({

	render: function() {
		return(
		  <main>
		      <nav>
		        <div className="nav-wrapper">
		          <a href="#" className="brand-logo">Logo</a>
		          <ul id="nav-mobile" className="right side-nav">
		            <li><a href="sass.html">Sass</a></li>
		            <li><a href="components.html">Components</a></li>
		            <li><a href="javascript.html">JavaScript</a></li>
		          </ul>
		        </div>
		      </nav>

		    <div className="container">
		      <div id="example"></div>
		    </div>
	    </main>
      );
	}
});


module.exports = content;