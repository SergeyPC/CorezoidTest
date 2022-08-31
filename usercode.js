const Vonage = require('@vonage/server-sdk');
const VONAGE_API_KEY = '89e001ee';
const VONAGE_API_SECRET = '9jXvJWWHeqQkK2qd';
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = './private.key';

module.exports = (data) => {
    
    const vonage = new Vonage({
        apiKey: VONAGE_API_KEY,
        apiSecret: VONAGE_API_SECRET,
        applicationId: "0867d11e-b533-4d07-bcf2-682b734064b7",
        privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
    });
    
    vonage.calls.create({
        to: [{
            type: 'phone',
            number: "380935441781"
        }],
        from: {
            type: 'phone',
            number: "380935441781"
        },
        ncco: [{
            "action": "talk",
            "text": "Привет Сергей"
        }]
    }, (error, response) => {
        if (error) data.error = error;
        if (response) data.response = response;
    });
    return data;
};
