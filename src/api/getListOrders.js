import axios from 'axios'
import { baseUrl } from './common/baseUrl'

const getListOrders = ({ token, offset = 0 }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/orders/?limit=50&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getListOrders
