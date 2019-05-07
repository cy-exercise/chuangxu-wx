// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/style/border.css'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import {Style, Upload, Toast, Dialog, Picker, Loading, TabBar, TabPanels} from 'cube-ui'

Vue.config.productionTip = false;

// 设置axios全局默认值
axios.defaults.baseURL = 'http://cy123.natapp1.cc'
// axios.defaults.baseURL = 'http://nurse.chuangxu.cn'
// axios.defaults.baseURL = 'http://chuangxu.natapp4.cc'
// axios.defaults.baseURL = 'http://cy123.natapp1.cc'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + VueCookies.get('access_token')

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response.status === 401) {
    window.location.href = 'http://cy123.natapp1.cc/m/auth/weixin/login'
  }
  return Promise.reject(error);
});


Vue.prototype.$ajax= axios

Vue.use(VueCookies)
Vue.use(Upload)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Picker)
Vue.use(Loading)
Vue.use(TabBar)
Vue.use(TabPanels)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
