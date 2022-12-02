import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

// Passing configuration object to axios
const postAuth = data =>
  axios({
    method: 'post',
    url: `${baseUrl}/pro1/1jectapi/v/auth-user/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postAuth
