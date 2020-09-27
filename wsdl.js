const http = require('http');

module.exports.BelaviaWSDL = function (httpUrl) {
    return new Promise(function(resolve, reject) {
        var req = http.get(httpUrl, function(res) {
            let body = '';
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
                resolve(body);
            });
        });
        req.on('error', function(err) {
            reject(err);
        });
        req.end();
    });
}
