import axios from 'axios'

// const baseUrl = 'https://proxyline.kd0ezcuuae-yk26edgxg379.p.temp-site.link/'

const getMainText = () =>
  axios({
    method: 'get',
    url: `https://proxyline.kd0ezcuuae-yk26edgxg379.p.temp-site.link/api/main`,
  })

export default getMainText
