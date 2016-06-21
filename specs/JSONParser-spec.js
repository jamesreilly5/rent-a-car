var JsonParser = require('./../app/JSONParser.js');

describe('JSONParser', function() {

    describe('parse', function() {
        var validResponseData = require('./fixtures/apiResponse.json'),
            expectedOutput = require('./fixtures/expectedParsedData.json');

        describe('when valid data is supplied', function() {
            it('parses the expected output', function() {
                expect(JsonParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });

        describe('when no data is supplied', function() {
            it('returns an empty array', function() {
                expect(JsonParser.parse(null)).toEqual({ suppliers: {} });
            });
        });
    });

});
