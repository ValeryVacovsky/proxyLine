import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const postUpdateProxyIps = ({ token, proxyId, data }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/proxy/${proxyId}/accessips/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postUpdateProxyIps
