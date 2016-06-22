var _ = require('underscore');

var compare = function compare(property) {
    var sortOrder = 1;
    if(property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};

module.exports = {
    getCars: function(json) {
        return _.flatten(_.values(json))
    },

    // Acknowledging that this can be done quite easily in underscore. Thought I'd implement
    // to show how to do it.
    sortBy: function(json, property) {
        return this.getCars(json).sort(compare(property));
    },

    filterBy: function(json, property, value) {
        if(json === '') { return json; }
        return _.map(
            this.getCars(json),
            function(hash) {
                hash['visible'] = (hash[property].indexOf(value) > -1);
                return hash;
            }
        );
    }
};
