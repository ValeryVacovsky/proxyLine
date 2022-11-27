import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

const getRubPrice = () => axios({
  method: 'get',
  url: `${baseUrl}/projectapi/v1/1/rub-price/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
});

export default getRubPrice;
