import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const postAuth = data =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/auth-user/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postAuth
