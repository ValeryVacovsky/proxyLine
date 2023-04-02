import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const deleteTag = ({ token, tag }) =>
  axios({
    method: 'delete',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/tag/${tag}`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default deleteTag
