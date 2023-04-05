import axios from 'axios'

const postUserCheck = ({ token, data }) =>
  axios({
    method: 'post',
    url: `https://checker.proxyapis.com/user-check?stream=true&test=true`,
    headers: {
      accept: 'application/json',
      token: token,
      'Content-Type': 'application/json',
    },
    data,
  })

export default postUserCheck
