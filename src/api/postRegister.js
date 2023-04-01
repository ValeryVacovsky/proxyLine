import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const postRegister = data =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postRegister
