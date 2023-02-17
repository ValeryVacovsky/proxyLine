import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

// Passing configuration object to axios
//proxydbtest.proxyline.net/projectapi/v1/1/user/116_EkPyrFRIkRWUW2Klh3dQTzQC1XSrlC/proxies/?with_tags=false&with_access_ips=false&limit=100&offset=0
const getListProxies = ({ token, limit = 100, offset = 0, endpoint }) =>
  axios({
    // 116_EkPyrFRIkRWUW2Klh3dQTzQC1XSrlC
    method: 'get', // 116_EkPyrFRIkRWUW2Klh3dQTzQC1XSrlC/proxies/?order=0&limit=100&offset=0
    url: `${baseUrl}/projectapi/v1/1/user/${token}/proxies/?${endpoint}&with_tags=true&with_access_ips=true&limit=${limit}&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getListProxies
