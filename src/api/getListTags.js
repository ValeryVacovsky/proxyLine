import axios from 'axios';

const baseUrl = 'https://proxydbtest.proxyline.net';

// Passing configuration object to axios
const getListTags = ({
  token, limit, offset,
}) => axios({
  method: 'get',
  url: `${baseUrl}/projectapi/v1/1/user/${token}/tags/?limit=${limit}&offset=${offset}`,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'project-1-apikey',
  },
});

export default getListTags;
