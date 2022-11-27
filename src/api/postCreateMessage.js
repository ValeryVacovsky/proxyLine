import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

const postCreateMessage = ({ token, data }) => axios({
  method: 'post',
  url: `${baseUrl}/projectapi/v1/1/user/${token}/message`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
  data,
});

export default postCreateMessage;
