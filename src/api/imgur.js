const ROOT_URL = 'http://localhost:8080';
//TODO: uncomment below and comment above after making imgur accout
/*
import qs from 'qs';
const CLIENT_ID = 'clientIdChangeLater';
const ROOT_URL = 'https://api.imgur.com';
*/

export default {
  login() {
    window.location = `${ROOT_URL}/oauth2/callback#access_token=1234567890`;
    //TODO: uncomment below and comment above after making imgur accout
    /*
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    */
  },
};
