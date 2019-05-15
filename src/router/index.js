import Vue from 'vue'
import Router from 'vue-router'
import SelectItem from '@/pages/common/SelectItem'
import Percent from '@/pages/common/Percent'
import Protocol from '@/pages/common/Protocol'

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
import Upload from '../pages/common/Upload'
import Login from '../pages/agent/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/protocol',
      name: 'Protocol',
      component: Protocol
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply,
      meta: {
        title: '医考宝代理协议协议'
      }
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/bind_phone',
      name: 'BindPhone',
      component: BindPhone,
      meta: {
        title: '绑定手机号'
      }
    },
    {
      path: '/becomes',
      name: 'Becomes',
      component: Becomes,
      meta: {
        title: '申请成为代理'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '填写基本信息'
      }
    },
    {
      path: '/apply_complete',
      name: 'ApplyComplete',
      component: ApplyComplete,
      meta: {
        title: '零钱提现'
      }
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent,
      meta: {
        title: '我的代理'
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        title: '我的业绩'
      }
    },
    {
      path: '/salary',
      name: 'Earnings',
      component: Earnings,
      meta: {
        title: '我的工资'
      }
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta: {
        title: '工资提现'
      }
    },
    {
      path: '/withdraw_info',
      name: 'WithdrawInfo',
      component: WithdrawInfo,
      meta: {
        title: '工资提现'
      }
    },
    {
      path: '/bill',
      name: 'Bill',
      component: Bill,
      meta: {
        title: '账单'
      }
    },
  ]
})
