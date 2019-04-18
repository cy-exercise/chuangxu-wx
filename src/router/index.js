import Vue from 'vue'
import Router from 'vue-router'
import SelectItem from '@/pages/common/SelectItem'
import Percent from '@/pages/common/Percent'

import Apply from '../pages/agent/Apply'
import BindPhone from '../pages/agent/BindPhone'
import Becomes from '../pages/agent/Becomes'
import Register from '../pages/agent/Register'
import ApplyComplete from '../pages/agent/ApplyComplete'
import Agent from '../pages/agent/Agent'
import AgentInfo from '../pages/agent/AgentInfo'
import Order from '../pages/agent/Order'
import Earnings from '../pages/agent/Earnings'
import Withdraw from '../pages/agent/Withdraw'
import WithdrawInfo from '../pages/agent/WithdrawInfo'
import Bill from '../pages/agent/Bill'
import Header from '../pages/common/Header'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    }, {
      path: '/header',
      name: 'Header',
      component: Header
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
    {
      path: '/apply_complete',
      name: 'ApplyComplete',
      component: ApplyComplete
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent,
      children: [
        {
          path: ':type/agent_info',
          component: AgentInfo
        }
      ]
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/salary',
      name: 'Earnings',
      component: Earnings
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/withdraw_info',
      name: 'WithdrawInfo',
      component: WithdrawInfo
    },
    {
      path: '/bill',
      name: 'Bill',
      component: Bill
    },
  ]
})
