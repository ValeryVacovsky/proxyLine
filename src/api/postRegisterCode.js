import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

// Passing configuration object to axios
const postRegisterCode = (data) => axios({
  method: 'post',
  url: `${baseUrl}/projectapi/v1/1/verification-code/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
  data,
});

export default postRegisterCode;
