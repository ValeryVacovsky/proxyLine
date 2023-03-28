import axios from 'axios'

const getCountryDiscription = () =>
  axios({
    method: 'get',
    url: `https://proxyline.nomadicdemo.com/api/language-desc`,
  })

export default getCountryDiscription
