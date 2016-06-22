var React = require('react');

var SORT_SELECT_ID = 'car-sorter';
var FILTER_SELECT_ID = 'car-filter';

var FilterPanel = React.createClass({

    currentSortProperty: function() {
        var e = document.getElementById(SORT_SELECT_ID);
        return e.options[e.selectedIndex].value;
    },

    currentFilterProperty: function() {
        var e = document.getElementById(FILTER_SELECT_ID);
        return e.options[e.selectedIndex].value;
    },

    sort: function() {
        this.props.sort(this.currentSortProperty());
    },

    filter: function() {
        this.props.filter('description', this.currentFilterProperty());
    },


	render: function() {
		return (
            <div className='row'>
                <div className='col-md-8 col-md-offset-2 search-options'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label>Sort by</label>
                            <select id={SORT_SELECT_ID} className="form-control" onChange={this.sort}>
                                <option value='rate' defaultValue>Lowest Price</option>
                                <option value='doors'>Number of doors</option>
                                <option value='bags'>Bag Capacity</option>
                                <option value='description'>Description</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <label>Manufacturer</label>
                            <select id={FILTER_SELECT_ID} className="form-control" onChange={this.filter}>
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
		)
	}
});

module.exports = FilterPanel;
