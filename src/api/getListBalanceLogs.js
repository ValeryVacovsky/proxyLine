import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getListBalanceLogs = ({ token, limit, offset }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/balance-logs/?limit=${limit}&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getListBalanceLogs
