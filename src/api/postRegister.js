import axios from 'axios'
const baseUrl = 'https://proxydbtest.proxyline.net'

// Passing configuration object to axios
const postRegister = data =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data: data,
  })

export default postRegister
