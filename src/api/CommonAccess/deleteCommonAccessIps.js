import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const deleteCommonAccessIps = ({ data, token }) =>
  axios({
    method: 'delete',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/common-accessips/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default deleteCommonAccessIps
