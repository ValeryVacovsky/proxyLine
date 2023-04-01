import axios from 'axios'

import { baseUrlAdmin } from '../common/baseUrlAdmin'

const getCupones = () =>
  axios({
    method: 'get',
    url: `${baseUrlAdmin}coupones`,
  })

export default getCupones
