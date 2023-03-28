import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const postUpdateProxyTags = ({ token, proxyId, data }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/proxy/${proxyId}/tags/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postUpdateProxyTags
