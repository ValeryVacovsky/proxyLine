import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

export const deleteDeleteAccessIp = ({ token, idIps }) =>
  axios.delete(`${baseUrl}/projectapi/v1/1/user/${token}/accessip/${idIps}/`, {
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })
