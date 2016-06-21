var React = require('react');
var CarList = require('./components/CarList');
var Footer = require('./components/Footer');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<CarList />
				<Footer />
			</div>
		)
	}

});

module.exports = App;
