var React = require('react');

var Collapse = require('react-collapse');

var MORE_INFO = 'More info';
var LESS_INFO = 'Less info';

var Car = React.createClass({

	getInitialState: function(){
		return { expandInfo: false };
	},

	moreInfo: function(e) {
		this.setState({ expandInfo: !this.state.expandInfo });
		e.target.innerHTML = this.state.expandInfo ? MORE_INFO : LESS_INFO;
	},

	render: function() {
		return (
            <div className={(this.props.visible ? ' ' : 'hidden ') + 'col-md-6'}>
                <div className='car-details'>
                    <h3 className='text-center'>{this.props.description}</h3>
                    <div className='car-preview'>
                        <img src={this.props.imageThumbnail} />
                    </div>
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
                        <span className='col-xs-7'>{ this.props.airConditioning ? 'Yes' : 'No' }</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>Transmission:</span>
                        <span className='col-xs-7'>{this.props.transmission}</span>
                    </div>
                    <div className='row car-stat'>
                        <span className='col-xs-5 stat-type'>No. of doors:</span>
                        <span className='col-xs-7'>{this.props.doors}</span>
                    </div>
					<div className='text-center'>
						<a className='info-toggle' onClick={this.moreInfo}>{MORE_INFO}</a>
					</div>
					<Collapse isOpened={this.state.expandInfo}>
						<div className='row car-stat'>
							<span className='col-xs-5 stat-type'>Bag capacity:</span>
							<span className='col-xs-7'>{this.props.bags}</span>
						</div>
						<div className='row car-stat'>
	                        <span className='col-xs-5 stat-type'>Code Context:</span>
	                        <span className='col-xs-7'>{this.props.codeContext}</span>
	                    </div>
						<div className='row car-stat'>
	                        <span className='col-xs-5 stat-type'>Code:</span>
	                        <span className='col-xs-7'>{this.props.code}</span>
	                    </div>
						<div className='row car-stat'>
	                        <span className='col-xs-5 stat-type'>Drive Type:</span>
	                        <span className='col-xs-7'>{this.props.driveType}</span>
	                    </div>
					</Collapse>
                    <div className='pricing-details'>
                        <div className='row car-stat'>
                            <h3>{this.props.currency} {this.props.rate}</h3>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
});

module.exports = Car;
