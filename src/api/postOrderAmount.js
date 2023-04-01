import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const postOrderAmount = ({ data, token }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/order/amount/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postOrderAmount
