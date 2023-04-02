import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const getProxyPrices = () =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/proxy-prices/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getProxyPrices
