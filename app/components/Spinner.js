var React = require('react');

var Spinner = React.createClass({
	render: function() {
		return (
			<div className='spinner'>
				<div className='row text-center spinner'><h1>Loading your cars, please wait...</h1></div>
			</div>
		)
	}
});

module.exports = Spinner;
