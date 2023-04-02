import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const getOrderLimits = () =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/order-limits/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getOrderLimits
