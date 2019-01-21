import axios from 'axios'
// 创建axios实例 application/x-www-data-urlencoded  application/json
const service = axios.create({
baseURL: 'http://fubaoapp.xfchkj.com:8080',
//baseURL: 'http://192.168.0.35',
  timeout: 15000,
  headers: {'Content-Type': 'application/json'}
})
service.interceptors.response.use(
  function(response) {
    // 请求正常则返回,这里返回了所有的请求头和请求体信息
    let data = {
    	code:response.data.meta.code,
    	desc:response.data.meta.desc,
    	data:response.data.data
    }

    return Promise.resolve(data)
  },
  function(error) {
    // 请求错误则向store commit这个状态变化
    const httpError = {
      alertFlag: true,
      errorStatus: error.response.status,
      msgg: error.response.statusText
    }
    this.$store.commit('SET_ALERT_FLAG', {state: false, type: 'ok'})
    console.log(httpError)
    return Promise.reject(error)
  }
)

export default service