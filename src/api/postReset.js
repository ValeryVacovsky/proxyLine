import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

// Passing configuration object to axios
const postReset = data =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/reset-password-code/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postReset
