import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const getListOrders = ({ token, limit, offset }) =>
  axios({
    method: 'get',
    url: `https://proxydbtest.proxyline.net/projectapi/v1/1/user/116_EkPyrFRIkRWUW2Klh3dQTzQC1XSrlC/orders/?limit=50&offset=0`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getListOrders
