import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const putUpdateAccessIp = ({ token, data, id }) =>
  axios({
    method: 'put',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/accessip/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default putUpdateAccessIp
