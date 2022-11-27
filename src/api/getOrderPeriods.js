import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

const getOrderPeriods = () => axios({
  method: 'get',
  url: `${baseUrl}/projectapi/v1/1/order-periods/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
});

export default getOrderPeriods;
