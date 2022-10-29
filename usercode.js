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
  return new Promise((resolve, reject) => {
    vonage.calls.create({
      to: [{
        type: 'phone',
        number: data.phone
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
        eventUrl: ['https://www.corezoid.com/api/2/json/public/1138328/4f24175577e9b832d146b137d2c482400489a84f'],
        dtmf: {
          'timeOut': '10',
          'submitOnHash': true
        }
      }
      ]
    }, (error, response) => {
      if (error) {
        data.answer = error;
        reject(data);
      }
      if (response) {
        data.answer = response;
        resolve(data);
      }
    })
  })
}
