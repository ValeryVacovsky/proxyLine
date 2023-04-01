import axios from 'axios'

import { baseUrl } from '../common/baseUrl'

const deleteDeleteTag = ({ token, data, id }) =>
  axios({
    method: 'delete',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/tag/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default deleteDeleteTag
