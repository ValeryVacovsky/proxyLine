import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getUserComment = ({ token }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/comment/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getUserComment
