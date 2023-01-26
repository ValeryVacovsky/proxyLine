import axios from 'axios'

const baseUrl = 'https://proxydbtest.proxyline.net'

// Passing configuration object to axios
const postCreateOrder = ({ data }) =>
  axios({
    method: 'post',
    url: `${baseUrl}/projectapi/v1/1/user/116_EkPyrFRIkRWUW2Klh3dQTzQC1XSrlC/order/`,
    headers: {
      'Content-Type': 'application/json',
      apikey: 'project-1-apikey',
    },
    data,
  })

export default postCreateOrder
