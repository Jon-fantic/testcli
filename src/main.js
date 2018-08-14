import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "assets/scss/reset.scss"
import 'src/plugins/filter'
import 'src/plugins/http'

Vue.config.productionTip = false
export const rootNode = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 添加响应拦截器
rootNode.axios.interceptors.response.use(
  response => {
  // 对响应数据做些事
  // console.log(response)
  if (response.config.needUILoading) {
  }
  let status = response.status
  if (status < 200 && status >= 300) {
    rootNode.$message.error('系统异常');
    
  }
  return response
}, error => {
  // 请求错误时做些事
  // console.log(error)
  // console.log(error)
  // Error: Request failed with status code 400
  // let status = error.status
  rootNode.axios.defaults.timeout = 6000
  if(!!~(error.toString().indexOf('timeout'))){
    rootNode.$message.error('请求超时,请稍后再试');
    return Promise.reject(error)
  }

  if(!!~(error.toString().indexOf('Network Error'))){
    rootNode.$message.error('网络异常，请检查网络设置');
    return Promise.reject(error)
  }


  if(!!~(error.toString().indexOf('Request failed with status code'))){
    let status =  error.toString().slice(-3)
    // console.log(status)

    if(status < 200 && status >= 300){
      rootNode.$message.error('系统异常');
     
      return Promise.reject(error)
    }
  }
})