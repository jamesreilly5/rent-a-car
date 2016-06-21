var JsonParser = require('./../app/JSONParser.js');

describe('JSONParser', function() {

    describe('parse', function() {
        var validResponseData = require('./fixtures/apiResponse.json'),
            expectedOutput = require('./fixtures/expectedParsedData.json');

        describe('when valid data is supplied', function() {
            it('parses the expected supplier output', function() {
                expect(JsonParser.parse(validResponseData)['suppliers']).toEqual(expectedOutput['suppliers']);
            });

            it('parses the pickup and return info', function() {
                expect(JsonParser.parse(validResponseData)['pickupInfo']).toEqual(
                    {
                        "pickupDate": new Date("2014-09-22T10:00:00Z"),
                        "returnDate": new Date("2014-10-06T10:00:00Z"),
                        "pickupLocation": "Las Vegas - Airport",
                        "returnLocation": "Las Vegas - Airport"
                    }
                );
            });
        });

        describe('when no data is supplied', function() {
            it('returns an empty array', function() {
                expect(JsonParser.parse(null)).toEqual({ suppliers: {}, pickupInfo: {} });
            });
        });
    });

});
