import axios from 'axios'

const getListOrders = ({ token, offset = 0 }) =>
  axios({
    method: 'get',
    url: `https://proxydbtest.proxyline.net/projectapi/v1/1/user/${token}/orders/?limit=50&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getListOrders
