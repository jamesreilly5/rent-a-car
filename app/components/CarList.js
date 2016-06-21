var React = require('react');

var Car = require('./Car');
var Spinner = require('./Error');
var Spinner = require('./Spinner');

var JsonParser = require('./../JSONParser');
var Api = require('./../ApiClient');
var SortUtils = require('./../SortUtils');

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
        this.setState({ data: JsonParser.parse(event.body) });
    },

    handleError: function(event) {
        this.setState({ error: event.body['error'] });
    },

    render: function() {
        if (this.state.error) { return <Error errorMessage={this.state.error} /> }
        if (!this.state.data.suppliers) { return <Spinner /> }

        var carList = SortUtils.sortByRate(this.state.data);

        return (
            <div clasName='container god-directory'>
                <section className='hero jumbotron'>
                    <h1 className='text-center'>Ultimate rental directory</h1>
                    <h2 className='text-center'>Awesome cars without the loan final notice</h2>
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
                                    />
                        })
                    }
                </section>
            </div>
        )
    }
});

module.exports = CarList;
