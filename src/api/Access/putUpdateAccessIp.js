import axios from 'axios'

import { baseUrl } from '../common/baseUrl'

const putUpdateAccessIp = ({ token, data, id }) =>
  axios({
    method: 'put',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/accessip/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default putUpdateAccessIp
