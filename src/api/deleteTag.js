import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const deleteTag = ({ token, tag }) =>
  axios({
    method: 'delete',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/tag/${tag}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default deleteTag
