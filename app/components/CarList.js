var React = require('react');

var Car = require('./Car');
var Spinner = require('./Error');
var Spinner = require('./Spinner');
var PickupInfo = require('./PickupInfo');

var JsonParser = require('./../JSONParser');
var Api = require('./../ApiClient');
var SortUtils = require('./../SortUtils');

var format = require('date-format');

// In a proper deployment situation these credentials would be pulled down
// from a config in an S3 bucket. Hard-coded for the purpose of this exercise.
var API_ENDPOINT = 'http://www.cartrawler.com/ctabe/cars.json';

var CarList = React.createClass({

    getInitialState: function(){
		return { data: { cars: null }, error: null };
	},

	componentWillMount: function() {
		var self = this;
		// Api.get(API_ENDPOINT, this.handleError, this.handleApiSearchSuccess);
        var validResponseData = require('./../../specs/fixtures/feed.json');
        this.handleApiSearchSuccess({ body: validResponseData });
	},

    handleApiSearchSuccess: function(event) {
        var parsedData = JsonParser.parse(event.body)
        this.setState({
            carList: SortUtils.sortBy(parsedData['suppliers'], 'rate'),
            pickupInfo: parsedData.pickupInfo
        });
    },

    handleError: function(event) {
        this.setState({ error: event.body['error'] });
    },

    currentSortProperty: function() {
        var e = document.getElementById('car-sorter');
        return e.options[e.selectedIndex].value;
    },

    currentFilterProperty: function() {
        var e = document.getElementById('car-filter');
        return e.options[e.selectedIndex].value;
    },

    sort: function(e) {
        this.setState({
            carList: SortUtils.sortBy(this.state.carList, this.currentSortProperty()),
            pickupInfo: this.state.pickupInfo
        });
    },

    filter: function(e) {
        this.setState({
            carList: SortUtils.filterBy(this.state.carList, 'description', this.currentFilterProperty()),
            pickupInfo: this.state.pickupInfo
        });
    },

    render: function() {
        if (this.state.error) { return <Error errorMessage={this.state.error} /> }
        if (!this.state.carList) { return <Spinner /> }

        var carList = this.state.carList,
            pickupInfo = this.state.pickupInfo;

        return (
            <div clasName='container god-directory'>
                <section className='hero jumbotron'>
                    <h1 className='text-center'>Ultimate rental directory</h1>
                    <h2 className='text-center'>Awesome cars, without the loan sharks</h2>

                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2 search-options'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Sort by</label>
                                    <select id='car-sorter' className="form-control" onChange={this.sort}>
                                        <option value='rate' defaultValue>Lowest Price</option>
                                        <option value='doors'>Number of doors</option>
                                        <option value='bags'>Bag Capacity</option>
                                    </select>
                                </div>
                                <div className='col-md-6'>
                                    <label>Manufacturer</label>
                                    <select id='car-filter' className="form-control" onChange={this.filter}>
                                        <option value='' defaultValue>All</option>
                                        <option value='Cadillac' defaultValue>Cadillac</option>
                                        <option value='Chevrolet' defaultValue>Chevrolet</option>
                                        <option value='Chrysler' defaultValue>Chrysler</option>
                                        <option value='Ford' defaultValue>Ford</option>
                                        <option value='Kia' defaultValue>Kia</option>
                                        <option value='Toyota' defaultValue>Toyota</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <PickupInfo pickupDate={format.asString('dd/MM/yyyy', pickupInfo.pickupDate)}
                                returnDate={format.asString('dd/MM/yyyy', pickupInfo.returnDate)}
                                pickupTime={format.asString('hh:mm', pickupInfo.pickupDate)}
                                returnTime={format.asString('hh:mm', pickupInfo.returnDate)}
                                pickupLocation={pickupInfo.pickupLocation}
                                returnLocation={pickupInfo.returnLocation} />
                </section>

                <section className='container'>
                    {
                        carList.map(function(car) {
                            return <Car status={car.status}
                                        airConditioning={car.airConditioning}
                                        transmission={car.transmission}
                                        fuelType={car.fuelType}
                                        driveType={car.driveType}
                                        seats={car.seats}
                                        bags={car.bags}
                                        code={car.code}
                                        codeContext={car.codeContext}
                                        doors={car.doors}
                                        description={car.description}
                                        imageThumbnail={car.imageThumbnail}
                                        rate={car.rate}
                                        currency={car.currency}
                                        visible={car.visible}
                                    />
                        })
                    }
                </section>
            </div>
        )
    }
});

module.exports = CarList;
