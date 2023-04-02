import axios from 'axios'

import { baseUrl } from './common/baseUrl'

const getCountries = () =>
  axios({
    method: 'get',
    url: `${baseUrl}/projectapi/v1/1/countries/'`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
  })

export default getCountries
