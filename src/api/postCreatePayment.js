import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

const postCreatePayment = ({ token, data }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/${token}/payment/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postCreatePayment
