const BelaviaWSDL = 'GoodBoy';
const http = require('http');

module.exports.masha = function() {
    return BelaviaWSDL;
}


module.exports.misha = function() {
    return new Promise(function(resolve, reject) {
        var req = http.get('http://api-tt.belavia.by/TimeTable/Service.asmx?WSDL', function(res) {
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

