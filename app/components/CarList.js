var React = require('react');

var Car = require('./Car');
var Spinner = require('./Error');
var Spinner = require('./Spinner');
var PickupInfo = require('./PickupInfo');
var FilterPanel = require('./FilterPanel');

var JsonParser = require('./../JSONParser');
var Api = require('./../ApiClient');
var SortUtils = require('./../SortUtils');

var format = require('date-format');

// In a proper deployment situation these credentials would be pulled down
// from a config in an S3 bucket. Hard-coded for the purpose of this exercise.
var API_ENDPOINT = 'http://www.cartrawler.com/ctabe/cars.json'
    DEFAULT_SORT = 'rate';

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
            carList: SortUtils.sortBy(parsedData['suppliers'], DEFAULT_SORT),
            pickupInfo: parsedData.pickupInfo
        });
    },

    handleError: function(event) {
        this.setState({ error: event.body['error'] });
    },

    sort: function(property) {
        this.setState({
            carList: SortUtils.sortBy(this.state.carList, property),
            pickupInfo: this.state.pickupInfo
        });
    },

    filter: function(property, value) {
        this.setState({
            carList: SortUtils.filterBy(this.state.carList, property, value),
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
                    <FilterPanel sort={this.sort} defaultSort={DEFAULT_SORT} filter={this.filter} />
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
