import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

const getPaymentSystem = () => axios({
  method: 'get',
  url: `${baseUrl}/projectapi/v1/1/user/projectapi/v1/1/payment-systems/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
});

export default getPaymentSystem;
