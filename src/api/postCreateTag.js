import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const postCreateTag = ({ data, token }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/tag/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postCreateTag
