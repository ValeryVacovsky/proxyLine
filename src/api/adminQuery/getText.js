import axios from 'axios'

import { baseUrlAdmin } from '../common/baseUrlAdmin'

const getText = (url, language) =>
  axios({
    method: 'get',
    url: `${baseUrlAdmin}${language}/${url}`,
  })

export default getText
