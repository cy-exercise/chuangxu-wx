// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/style/reset.css'
import './assets/style/border.css'
import axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false;

// 设置axios全局默认值
axios.defaults.baseURL = 'http://web.chuangxu.com'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + VueCookies.get('access_token')

Vue.prototype.$ajax= axios
Vue.use(MintUI)

Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
