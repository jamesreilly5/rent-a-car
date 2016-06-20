var ApiClient = require('./../app/ApiClient.js');
var request = require('superagent');
var config = require('./support/superagent-mock-config');

describe("ApiClient", function() {

    var dummyCallbacks = {
            sucessCallback: function(data) { /* I am a dummy function */ },
            errorCallback: function() { /* I am a dummy function */ }
        },
        superagentMock = null,
        API_ENDPOINT = 'https://my-api';

    beforeEach(function() {
        superagentMock = require('superagent-mock')(request, config);
        spyOn(dummyCallbacks, 'sucessCallback');
        spyOn(dummyCallbacks, 'errorCallback');
    });

    describe("when a 200 is returned", function() {
        it("invokes the sucess callback", function() {
            ApiClient.get(
                API_ENDPOINT + '/dublin',
                dummyCallbacks.errorCallback,
                dummyCallbacks.sucessCallback
            );
            expect(dummyCallbacks.sucessCallback).toHaveBeenCalled();
            expect(dummyCallbacks.errorCallback).not.toHaveBeenCalled();
        });
    });

    describe("when a 404 is returned", function() {
        it("invokes the error callback", function() {
            ApiClient.get(
                API_ENDPOINT + '/some-invalid-endpoint',
                dummyCallbacks.errorCallback,
                dummyCallbacks.sucessCallback
            );
            expect(dummyCallbacks.errorCallback).toHaveBeenCalled();
            expect(dummyCallbacks.sucessCallback).not.toHaveBeenCalled();
        });
    });

    describe("when a 420 is returned", function() {
        it("invokes the error callback", function() {
            ApiClient.get(
                API_ENDPOINT + '/some-invalid-endpoint-with-a-420',
                dummyCallbacks.errorCallback,
                dummyCallbacks.sucessCallback
            );
            expect(dummyCallbacks.errorCallback).toHaveBeenCalled();
            expect(dummyCallbacks.sucessCallback).not.toHaveBeenCalled();
        });
    });

    afterEach(function() {
        superagentMock.unset();
    });
});
