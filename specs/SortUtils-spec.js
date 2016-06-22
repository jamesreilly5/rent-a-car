var SortUtils = require('./../app/SortUtils.js');

var jsonToSort = require('./fixtures/expectedParsedData.json'),
    carsJson = require('./fixtures/carsJson.json');

describe('SortUtils', function() {

    describe('getCars', function() {
        it('returns an array of car hashes', function() {
            expect(SortUtils.getCars(jsonToSort['suppliers'])).toEqual(carsJson);
        });
    });

    describe('sortBy', function() {
        var sortedJson = require('./fixtures/sortedJsonByPrice.json');

        it('sorts by price', function() {
            expect(SortUtils.sortBy(jsonToSort['suppliers'], 'rate')).toEqual(sortedJson);
        });
    });

    describe('filterBy', function() {
        var jsonToFilter = require('./fixtures/expectedParsedData.json'),
            filteredJson = require('./fixtures/filteredJsonByDescription.json');

        it('sorts by price', function() {
            expect(SortUtils.filterBy(jsonToSort['suppliers'], 'description', 'Toyota Rav4 or similar')).toEqual(filteredJson);
        });
    });

});
