import axios from 'axios'

import { baseUrl } from '../common/baseUrl'

const getListAccessIps = ({ limit, offset, token }) =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/accessips/?limit=${limit}&offset=${offset}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getListAccessIps
