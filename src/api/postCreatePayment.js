import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const postCreatePayment = (token, data) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/payment/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data: data,
  })

export default postCreatePayment
