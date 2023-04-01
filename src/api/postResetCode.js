import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const postResetCode = data =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/reset-password/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postResetCode
