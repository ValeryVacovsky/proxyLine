import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const postSetUserPassword = ({ token, data }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/set-password/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postSetUserPassword
