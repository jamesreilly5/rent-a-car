var React = require('react');

var PickupInfo = React.createClass({
	render: function() {
		return (
        	<div className='row car-details'>
				<h3 className='text-center'>Pickup Info</h3>
				<div className='col-md-4 car-stat'>
					<div className='row'>
						<span className='col-xs-5 stat-type'>Pickup Date:</span>
						<span className='col-xs-7'>{this.props.pickupDate}</span>
					</div>
					<div className='row'>
						<span className='col-xs-5 stat-type'>Return Date:</span>
						<span className='col-xs-7'>{this.props.returnDate}</span>
					</div>
				</div>
				<div className='col-md-4 car-stat'>
					<div className='row'>
						<span className='col-xs-5 stat-type'>Pickup Time:</span>
						<span className='col-xs-7'>{this.props.pickupTime}</span>
					</div>
					<div className='row'>
						<span className='col-xs-5 stat-type'>Return Time:</span>
						<span className='col-xs-7'>{this.props.returnTime}</span>
					</div>
				</div>
				<div className='col-md-4 car-stat'>
					<div className='row'>
						<span className='col-xs-5 stat-type'>Pickup Location:</span>
						<span className='col-xs-7'>{this.props.pickupLocation}</span>
					</div>
					<div className='row'>
						<span className='col-xs-5 stat-type'>Return Location:</span>
						<span className='col-xs-7'>{this.props.returnLocation}</span>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = PickupInfo;
