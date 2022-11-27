import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

const getProxyPrices = () => axios({
  method: 'get',
  url: `${baseUrl}/projectapi/v1/1/proxy-prices/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
});

export default getProxyPrices;
