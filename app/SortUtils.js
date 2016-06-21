var _ = require('underscore');

var compare = function compare(a,b) {
  if (a.rate < b.rate)
    return -1;
  if (a.rate > b.rate)
    return 1;
  return 0;
};

module.exports = {
    getCars: function(json) {
        return _.flatten(_.values(json['suppliers']))
    },

    // Acknowledging that this can be done quite easily in underscore. Thought I'd implement
    // to show how to do it.
    sortByRate: function(json) {
        return this.getCars(json).sort(compare);
    }
};
