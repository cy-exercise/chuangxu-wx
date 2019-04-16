import Vue from 'vue'
import Router from 'vue-router'
import SelectItem from '@/pages/common/SelectItem'
import Percent from '@/pages/common/Percent'

import Apply from '../pages/agent/Apply'
import BindPhone from '../pages/agent/BindPhone'
import Becomes from '../pages/agent/Becomes'
import Register from '../pages/agent/Register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/bind_phone',
      name: 'BindPhone',
      component: BindPhone
    },
    {
      path: '/becomes',
      name: 'Becomes',
      component: Becomes
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
