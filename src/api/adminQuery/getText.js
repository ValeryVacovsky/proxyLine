import axios from 'axios'

const getText = (url, language) =>
  axios({
    method: 'get',
    url: `https://proxyline.nomadicdemo.com/api/${language}/${url}`,
  })

export default getText
