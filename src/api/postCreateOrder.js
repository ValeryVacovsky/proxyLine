import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

// Passing configuration object to axios
const postCreateOrder = ({ token, data }) => axios({
  method: 'post',
  url: `${baseUrl}/projectapi/v1/1/user/${token}/order/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
  data,
});

export default postCreateOrder;
// {
//     "quantity": 2,
//     "ip_type": 1,
//     "ip_version": 6,
//     "country": "us",
//     "period": 5,
//     "selected_ips": [],
//     "tags": [],
//     "unique_credentials": false,
//     "coupon": "string"
//   }
