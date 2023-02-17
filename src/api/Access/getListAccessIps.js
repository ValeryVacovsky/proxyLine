import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getListAccessIps = ({ data, limit, offset, token }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/accessips/?limit=${limit}&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
      data,
    },
  })

export default getListAccessIps
