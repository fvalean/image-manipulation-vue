/* eslint-disable no-unused-vars */
const ROOT_URL = 'http://localhost:8080';
//TODO: uncomment below and comment above after making imgur accout
//const ROOT_URL = 'https://api.imgur.com';

import qs from 'qs';
import axios from 'axios';
const CLIENT_ID = 'clientIdChangeLater';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/callback#access_token=1234567890`;
    //TODO: uncomment below and comment above after making imgur accout
    //window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  fetchImages(token) {
    //TODO: uncomment below and comment above after making imgur accout
    /*
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    */
  },
};

/* eslint-disable no-unused-vars */
