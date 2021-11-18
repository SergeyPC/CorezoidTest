require("libs/moment.js");
require("libs/moment-timezone.js");

data.v_validFrom = moment().tz("Europe/Kiev").format();
data.v_validTo = moment().tz("Europe/Kiev").add(364, "d").format();

module.exports = {data) => {
    return countData(data);
}

data.needSetCredit = true;

let balance = data.o_Solar_GetBalances.response[0];

balance.own = 35000;
if (data.RequestData.restrictionsCards) {
    var maxCreditLimit = 30000 - balance.own - balance.blocked;

    if (maxCreditLimit <= 0) {
        data.needSetCredit = false;

        //INCR_LIM_VIRT
        const INCR_LIM_VIRT = {
            "code": "INCR_LIM_VIRT",
            "value": 1,
            "name": "Тип картки не дозволяє збільшити ліміт",
            "data": ""
        };
        data.RequestData.CheckBusinessRules.result.push(INCR_LIM_VIRT);

        maxCreditLimit = 0;
    } else {
        //округляем
        if (maxCreditLimit <= 5000) {
            maxCreditLimit = Math.floor(maxCreditLimit / 500) * 500;
        } else {
            maxCreditLimit = Math.floor(maxCreditLimit / 1000) * 1000;
        }
    }

    data.RequestData.CreditInfo.ApprovedLimit = Math.min(data.RequestData.CreditInfo.ApprovedLimit, maxCreditLimit);

}


data.RequestData.CreditInfo.ApprovedLimit = Math.min(100000, data.RequestData.CreditInfo.ApprovedLimit);


data.v_amount = data.RequestData.CreditInfo.ApprovedLimit;


















/*const http = require('http');

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
}*/
