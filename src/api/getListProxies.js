import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

// Passing configuration object to axios
const getListProxies = ({ token, order = 0, limit = 100, offset = 0 }) =>
  axios({
    // 116_EkPyrFRIkRWUW2Klh3dQTzQC1XSrlC
    method: 'get', // 116_EkPyrFRIkRWUW2Klh3dQTzQC1XSrlC/proxies/?order=0&limit=100&offset=0
    url: `${baseUrl}/projectapi/v1/1/user/${token}/proxies/?order=${order}&limit=${limit}&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getListProxies
