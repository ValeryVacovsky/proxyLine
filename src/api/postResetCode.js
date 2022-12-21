import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'
// const data = { code: '316881196', email: 'johnn.snop+44@gmail.com' }
// const data = {
//   email: 'johnn.snop+44@gmail.com',
//   code: '247056390',
// }
// Passing configuration object to axios
const postResetCode = data =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/reset-password/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postResetCode
