import axios from 'axios'

import { baseUrlAdmin } from '../common/baseUrlAdmin'

const getLanguages = url =>
  axios({
    method: 'get',
    url: `${baseUrlAdmin}${url}`,
  })

export default getLanguages
