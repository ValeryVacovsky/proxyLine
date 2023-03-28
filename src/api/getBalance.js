import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getBalance = data =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${data}/balances/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getBalance
