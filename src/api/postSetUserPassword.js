import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const postSetUserPassword = ({ token, data }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/set-password/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postSetUserPassword
