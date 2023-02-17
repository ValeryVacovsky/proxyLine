import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const deleteDeleteAccessIp = ({ token, data, id }) =>
  axios({
    method: 'delete',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/accessip/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default deleteDeleteAccessIp
