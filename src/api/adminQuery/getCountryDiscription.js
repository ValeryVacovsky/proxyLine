import axios from 'axios'

import { baseUrlAdmin } from '../common/baseUrlAdmin'

const getCountryDiscription = () =>
  axios({
    method: 'get',
    url: `${baseUrlAdmin}language-desc`,
  })

export default getCountryDiscription
