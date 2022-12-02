import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getContries = () =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/countries/'`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getContries
