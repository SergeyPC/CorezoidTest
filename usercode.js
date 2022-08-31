const Vonage = require('@vonage/server-sdk');
const VONAGE_API_KEY = '89e001ee';
const VONAGE_API_SECRET = '9jXvJWWHeqQkK2qd';
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDnq8XAOh29xyOE' +
    'XA9IdDq20kpiEeP2p5ZGneBLzP0Xa1YVmYRKCOdSAaklEhbeB+6b8X201g8rk5Jt' +
    'gr1uB2JlYcS1lbzs4Zek9JkoQCkfun4EaBmo1PAfQtEt1R0VgFrw1Ugj6njCdOLq' +
    '/KmIcXL8AKuND5sNO3wtYahdd6uv5cITDo42FpC4EPBd9j7pVXVKM98kBlPffNiC' +
    '1FwXSvKB7c+VgMYxdcBcEm3EMsKch15II1IsaxL1q6xTzk1l3taSGSy03lls5cqB' +
    'dZZ2p44g+nTF62LbK8Np8abVJUaVDDtmgmEJ+xAsmKwFkc50uALv2qQkuGNfKL+9' +
    'N/D85tdhAgMBAAECggEAAMyUxWe5hCB3hcdeMUDSVjPlnQbgtZnptEYrJ+WVFL4x' +
    'n/tcoS3S+Jm6gOimzy35fNFiscrK0IRMW4P8odUgQD83CMOYT3wzJ/uxsSGSRyT1' +
    'rLYUSu4eQudx1QPPebeBeZowCvY5TU3edBfL6nCX5R2uZpy5QzsUMW+bf1dkVM2M' +
    '19SHdgGfgYjmc1OiR324pralpccGVM4vnLk98gYZuwtdDHhaaffjH+IT4qXl2Cc9' +
    'Sfxzdv9nKUyxKuVR3dP9u4eg2qwJULf3eA3gz2/HT5m+mBBmYTdxJfMzzOOOLWZ5' +
    'FSuV7V8Vhg0d8PDAEQnB7nrMvncEoxU5YtZ80cPwAQKBgQD2bfKpbFPJU7w/Sudc' +
    'czvSivjftOo9EDHRidWvQws2mDvbQ7ig7K4X8BlzZGS3/gfDDLAzdp6+D5AXauw1' +
    '7Y96pCBFuwDFSYzoy1EgQ52jmpymxgwVTCKM8TGJArQnDYtU+YczuTjA1R0BiypX' +
    '/RCc1ai25AtEVICx8tz2K0GnYQKBgQDwqxezHt1TpRGXr3IpM2wlkgroaygN6iHz' +
    'ZHup0UKCqzbw8qpNveOAdBETxHkSFaqcYp7oRYPKks1DkyO25JRzov7CYo81tFmc' +
    'TqMpJOOobjnbb+Fnp/A0k6/NboBOpuRPANoHZLDKqZXnWbHRbSUUdOg69gX2erdD' +
    'XE1IoCMwAQKBgQDew1cn9mfrR8mVAXYRqY17bus49ocEeh4+x7WlwBpj2MvLEvXU' +
    'av+ZXg7zs94kQPvtQwwJCYLIVrMvqBUtTrlz6OfPgRNaRHmfeyOz4cufuEVBsSf9' +
    'HJzjAamArDQEVYcNYp/ojtgR4NRer9mwPnCFBdOEuLLCqwzHT76UvVeVIQKBgDoS' +
    'rudT/Ugfvr0BYuS6OdBfCy7GHKYu5v5aMtTpX8k0E0/U3m9f8LOgTjac5DIO9FpE' +
    'GeAmVgTdo5Y4vRd21LOKkzrImZH18OGcwBY/hoewAVoIBzYB+h5VvMgvb9qKvvCp' +
    'XfMGwvpELZ3jsNq+IYJsK1V+5DVzqyEf9q4dpiABAoGBANxgomAsr4QYjzefkEg7' +
    'MPOkp9qRANwyqLQURbQY8LNIOFlPMMZ4T/jtDRyyBmmxXM/0c8kHWpk7sccmhOqm' +
    's53at1lndMB40SHtPjB9sfaUIbVFJLz949OIsomk4dJudhP28k5c5yNtzbgAqvtw' +
    'avx73iYbl9JqAkBLe2OrYJ0E';

const vonage = new Vonage({
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET,
    applicationId: "0867d11e-b533-4d07-bcf2-682b734064b7",
    privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
});

module.exports = (data) => {
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
