import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getCountProxyFilter = ({ token, limit = 100, offset = 0, endpoint }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/proxies/count/?${endpoint}&with_tags=true&with_access_ips=true&limit=${limit}&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getCountProxyFilter
