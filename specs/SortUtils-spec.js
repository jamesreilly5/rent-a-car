var SortUtils = require('./../app/SortUtils.js');

var jsonToSort = require('./fixtures/expectedParsedData.json'),
    carsJson = require('./fixtures/carsJson.json');

describe('SortUtils', function() {

    describe('getCars', function() {
        it('returns an array of car hashes', function() {
            expect(SortUtils.getCars(jsonToSort)).toEqual(carsJson);
        });
    });

    describe('sortBy', function() {
        var jsonToSort = require('./fixtures/expectedParsedData.json'),
            sortedJson = require('./fixtures/sortedJsonByPrice.json');

        it('sorts by price', function() {
            expect(SortUtils.sortByRate(jsonToSort, 'price', true)).toEqual(sortedJson);
        });
    });

});
