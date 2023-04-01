import axios from 'axios'

import { baseUrl } from '../common/baseUrl'

const postCommonAccessIps = ({ data, token }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/common-accessips/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postCommonAccessIps
