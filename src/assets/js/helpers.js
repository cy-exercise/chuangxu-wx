import axios from 'axios'

const urlMap = {
  development: 'http://nurse.chuangxu.com',
  production: 'http://nurse.chuangxu.com'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 200

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {errno, data} = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((e) => {
    })
  }
}
