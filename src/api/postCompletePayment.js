import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const postCompletePayment = ({ token, data, id }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/payment/${id}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postCompletePayment
