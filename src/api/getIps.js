import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getIps = ({ token, country, ipType, ipVersion, query }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/ips/?country=${country}&ip_type=${ipType}&ip_version=${ipVersion}&query=${query}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getIps
