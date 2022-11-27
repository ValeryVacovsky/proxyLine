import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

// Passing configuration object to axios
const postOrderAmount = (data) => axios({
  method: 'post',
  url: `${baseUrl}/projectapi/v1/1/order-amount/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
  data,
});

export default postOrderAmount;
