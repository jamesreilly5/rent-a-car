var React = require('react');

var Car = React.createClass({
	render: function() {
		return (
            <div className='col-md-6'>
                <div className='car-details'>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Status:</span>
                        <span className='col-xs-7'>{this.props.status}</span>
                    </div>
                    <div className='row car-stat '>
                        <span className='col-xs-5 stat-type'>Fuel Type:</span>
                        <span className='col-xs-7'>{this.props.fuelType}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>No. of seats:</span>
                        <span className='col-xs-7'>{this.props.seats}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Air Conditioning:</span>
                        <span className='col-xs-7'>{this.props.airConditioning}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Transmission:</span>
                        <span className='col-xs-7'>{this.props.transmission}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Fuel Type:</span>
                        <span className='col-xs-7'>{this.props.fuelType}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Drive Type:</span>
                        <span className='col-xs-7'>{this.props.driveType}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>No.of seats:</span>
                        <span className='col-xs-7'>{this.props.seats}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Bag capacity:</span>
                        <span className='col-xs-7'>{this.props.bags}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Code:</span>
                        <span className='col-xs-7'>{this.props.code}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Code Context:</span>
                        <span className='col-xs-7'>{this.props.codeContext}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>No. of doors:</span>
                        <span className='col-xs-7'>{this.props.doors}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>TODO: move this:</span>
                        <span className='col-xs-7'>{this.props.description}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>TODO: move this</span>
                        <span className='col-xs-7'>{this.props.imageThumbnail}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>TODO: move this</span>
                        <span className='col-xs-7'>{this.props.rate}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>TODO: move this</span>
                        <span className='col-xs-7'>{this.props.currency}</span>
                    </div>
                </div>
            </div>
		)
	}
});

module.exports = Car;