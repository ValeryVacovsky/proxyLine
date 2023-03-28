import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getCountProxies = ({ token, order }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/proxies/count/order=${order}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getCountProxies
