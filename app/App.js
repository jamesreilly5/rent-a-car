var React = require('react');
var Footer = require('./components/Footer');

var App = React.createClass({

	render: function() {
		return (
			<div>
				Hello World
				<Footer />
			</div>
		)
	}

});

module.exports = App;