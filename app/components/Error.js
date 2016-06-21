var React = require('react');

var Error = React.createClass({
	render: function() {
		return (
        	<div className='row text-center spinner'>
				<div className='error-icon'></div>
				<h2>Something bad has happened</h2>
				<h3>Error: {this.props.errorMessage}</h3>
			</div>
		)
	}
});

module.exports = Error;
