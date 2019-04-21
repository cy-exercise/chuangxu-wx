// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import './assets/style/reset.css'
import './assets/style/border.css'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import {Style, Upload, Toast, Dialog, Picker, Loading} from 'cube-ui'

Vue.config.productionTip = false;

// 设置axios全局默认值
VueCookies.set('access_token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkyNzFlMzExNjc5MWMyNjYzODNiNWIxODllY2ZlYjQwYjJmMDA1N2U1N2FmOTMwZGQwMzBiMzdiMjRlZmU0ODUwZDhiNjJlNzcxODVmYWQyIn0.eyJhdWQiOiI2IiwianRpIjoiOTI3MWUzMTE2NzkxYzI2NjM4M2I1YjE4OWVjZmViNDBiMmYwMDU3ZTU3YWY5MzBkZDAzMGIzN2IyNGVmZTQ4NTBkOGI2MmU3NzE4NWZhZDIiLCJpYXQiOjE1NTU2NDM4MjIsIm5iZiI6MTU1NTY0MzgyMiwiZXhwIjoxNTU2OTM5ODIyLCJzdWIiOiI0YzRjMWI4MC0wZTBhLTRkMTgtYmIwYS02MzRhMTg5MDMyNmYiLCJzY29wZXMiOltdfQ.PRveapPelYlBbPVyRKLhWveeQJkmwooKwtBM7gp_JRo12Ftte1TuJmm8CAucf_3LQlR514gN1AHfrJP7OJwCyCiVUyQ0rjOrpbZiZ7WkmMrGIUkf6eRq1aW32OEI68nNoIGW8YVIFVa-IIM1H2ikpEQaviTZ0z8N5F0FjoXdk_ZOQeDu50HMUyRxDzkS_PPm59MbhM_gIcyPuL-Di-XwsaV2PoJXiQ5Y7XFFD8Mpc3hanVznr53JWubz7WXnybI-5sg1J4A7I_zkUhTTEpuJbuSSWZRdAGfOBKkkIzxiu3hWjR2BED7ycx7iQ5_xolrx_vh2VbGJBSxS5whEGkGYj7IWepWgvZs5txrwgHXsWkcIzKKiElhG69xFP1hEFuEdGLbHW25ERugAEtzKCMhQaqDHIcumJjb_yfZYS6nb6HyD31KOt-xfvqiDq84TcfKwYJcyEfkYEfrwk6CRsAAAqA40-DYC6MlP2pIwktSeWREtlnQd43mYwtnEemb7kycqHXLxBE8vVHQwVgp8uad3IOB1ByBw0CBwt0cKjykZC-MIjwZgtoNqpHc_ELVUshW6DQmHpltI1V8Im3s2Vf5Pr8btRc_yXtSsyNbW_OgaljwU0wvbpz-iGKhOBIHnOyqyFfu0jRJG5w27Dk6Z1jywhBIyo10B_7rCoE7W_xgKmo8');
axios.defaults.baseURL = 'http://nurse.chuangxu.com'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + VueCookies.get('access_token')

Vue.prototype.$ajax= axios

Vue.use(VueCookies)
Vue.use(Upload)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Picker)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
