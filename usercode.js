const Vonage = require('@vonage/server-sdk');
const VONAGE_API_KEY = '89e001ee';
const VONAGE_API_SECRET = '9jXvJWWHeqQkK2qd';
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = './private.key';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: "29023722-635c-4541-8794-0e9140611b85",
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
});


module.exports = (data) => {
  let call = new Promise((resolve, reject) => {
    vonage.calls.create({
      to: [{
        type: 'phone',
        number: "380935441781"
      }],
      from: {
        type: 'phone',
        number: "380682886493"
      },
      ncco: [{
        "action": "talk",
        "text": "Do you confirm registration in the weather chat bot press 1 and lattice?"
      },
      {
        action: 'input',
        type: ['dtmf'],
        eventUrl: ['https://www.corezoid.com/api/1/json/public/1126597/8abf74d6564ee21485b5d101a6354feca91c07a5'],
        dtmf: {
          'timeOut': '10',
          'submitOnHash': true
        }
      }
      ]
    }, (error, response) => {
      if (error) {
        console.error(error);
        data.CallAnswer = error;
        reject(data);
      }
      if (response) {
        console.log(response);
        data.CallAnswer = response;
        resolve(data);
      }
    })
  })

  return call(data);
}
  /*

calls.then((resp) => {
vonage.calls.get(resp.uuid, (err, res) => {
if (err) { console.error(err); }
else {
  console.log(res);
}
})
})
*/
