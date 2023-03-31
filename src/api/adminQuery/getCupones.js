import axios from 'axios'

const getCupones = () =>
  axios({
    method: 'get',
    url: `https://proxyline.nomadicdemo.com/api/coupones`,
  })

export default getCupones
