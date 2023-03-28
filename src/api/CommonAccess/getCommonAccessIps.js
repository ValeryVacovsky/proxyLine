import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getCommonAccessIps = token =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/common-accessips/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getCommonAccessIps
