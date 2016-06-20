var request = require('superagent');
var Promise = require('es6-promise').Promise;

var errorCode = /^4[0-9].*$/;

module.exports = {
    get: function(url, onError, onSucess) {
        var self = this;

        return new Promise(function (resolve, reject) {
            request
            .get(url)
            .end(function(err, res) {
                if (errorCode.test(res.status)) {
                    onError(res);
                } else {
                    onSucess(res);
                }
            });
        });
    }
};
