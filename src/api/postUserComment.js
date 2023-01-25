import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

// Passing configuration object to axios
const postUserComment = ({ token, data }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/comment/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postUserComment