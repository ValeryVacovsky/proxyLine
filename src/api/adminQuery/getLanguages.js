import axios from 'axios'

const getLanguages = url =>
  axios({
    method: 'get',
    url: `https://proxyline.nomadicdemo.com/api/${url}`,
  })

export default getLanguages
