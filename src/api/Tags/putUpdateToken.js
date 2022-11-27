import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

const postCreateTag = ({ token, data, id }) => axios({
  method: 'put',
  url: `${baseUrl}/projectapi/v1/1/user/${token}/tag/${id}/`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
  data,
});

export default postCreateTag;
