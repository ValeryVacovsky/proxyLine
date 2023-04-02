import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const getContryAvailability = () =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/country-availability/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getContryAvailability
