<template>
  <div class="order">
    <div class="loading" v-show="loading">
      <cube-loading></cube-loading>
      <div class="description">加载中...</div>
    </div>
    <!--<Header title="我的业绩" to="/agent"></Header>-->
    <div class="nav border-bottom">
      <router-link to="">
        <div class="nav-item" :class="{is_selected: 'bao'=== type}" @click="handleSwitch('bao')">创序医考宝</div>
      </router-link>
      <router-link to="">
        <div class="nav-item" :class="{is_selected: 'nurse'=== type}" @click="handleSwitch('nurse')">创序护考</div>
      </router-link>
      <router-link to="">
        <div class="nav-item" :class="{is_selected: 'medical'=== type}"  @click="handleSwitch('medical')">创序医考</div>
      </router-link>
    </div>
    <div class="order-content" @scroll="handleScroll">
      <div class="overview">
        <div class="overview-head">
          <div class="current-name">{{channel_type}}</div>
          <div class="switch-block-button" v-show="!switch_show" @click="showSwitch">切换</div>
          <ul class="switch-block" v-show="switch_show">
            <li class="all border-bottom" @click="switchType('', '全部')">全部</li>
            <li class="border-bottom" v-for="item in order_type" @click="switchType(item.id, item.title)">{{item.title}}</li>
          </ul>
        </div>
        <div class="order-count-wrapper">
          <div class="order-count">{{order_total}}<span class="unit">单</span></div>
          <div class="order-count-name">我的业绩</div>
        </div>
        <div class="overview-line" ref="orderline">
        </div>
      </div>
      <div style="height: .15rem;background: #F8F8F8;"></div>
      <div class="order-list">
        <div class="order-title border-bottom">下单详情</div>
        <ul class="order-block">
          <li class="order-item border-bottom" v-for="item in list" >
            <div class="order-item-title">
              <div class="order-name">{{item.product ? item.product.title: '未知'}}</div>
              <div class="price">￥{{item.product.agent_profit}}</div>
            </div>
            <div class="order-item-username">
              <div class="user-name">{{item.user.name}}</div>
              <div class="order-date">{{item.created_at_format}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from '../common/Header'
  var echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require ('echarts/theme/macarons');
  export default {
    name: "Order",
    components: {
      // Header
    },
    data() {
      return {
        type: 'bao',
        loading: true,
        more: true,
        switch_show: false,
        order_type: ['医学','护理', '药学', '医技', '其他'],
        brand_id_map: {
          bao: '53b7715b-95cd-4d18-bc88-0f48dc5b4623',
          nurse: '5946661e-d8a2-49be-9202-b231ca907739',
          medical: '23f2efa5-2cbe-4060-bbbb-79bc8a64481a'
        },
        brand_id: '53b7715b-95cd-4d18-bc88-0f48dc5b4623',
        agents: {},
        list: [],
        week: [],
        orders_count: [],
        order_total: '',
        current_page: '',
        agent_id: '',
        channel_type: '全部',
        status_payoff: 4
      }
    },
    methods: {
      handleSwitch(type) {
        this.type = type;
        this.brand_id = this.brand_id_map[type];
        let agent_id = this.getAgentId(this.brand_id);
        if(!agent_id) {
          this.resetOrder();
          return false;
        }
        this.loading = true;
        this.getOrders(agent_id);
        this.getOrdersWeek(agent_id);
      },
      resetOrder(){
        this.order_total = 0;
        this.list = [];
        this.orders_count = [0, 0, 0, 0, 0, 0, 0];
      },
      showSwitch() {
        this.switch_show = true
      },
      switchType(channel_id, title) {
        this.loading = true;
        this.channel_type = title;
        let agent_id = this.getAgentId(this.brand_id);
        this.getOrders(agent_id, 1, channel_id);
        this.getOrdersWeek(agent_id, channel_id);
        this.$forceUpdate();
        this.switch_show = false;
      },
      drawLine(){
        let self = this
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.$refs.orderline)
        // 绘制图表
        let option = {
          xAxis: {
            type: 'category',
            data: self.week,
            // splitNumber: 2,
            // scale: true,
            // show:false,
            // splitLine:{
            //   show:false
            // },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: '#B5B5B5',
                fontSize:'10'
              },
            },
          },
          yAxis: {
            type: 'value',
            splitNumber: 2,
            scale: true,
            show:false,
            splitLine:{
              show:false
            }
          },
          grid: {
            top: '20px',
            left: '10px',
            // right: '0',
            bottom: '10px',
            containLabel: true
          },
          series: [{
            data: self.orders_count,
            type: 'line',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#28B2FE",
                  type: 'solid'
                }
              }
            },
            symbol: 'none',
            smooth:true
          }]
        };
        myChart.setOption(option);
      },
      getOrders(agent_id, page = 1, channel_id = '') {
        let query = `?status=${this.status_payoff}&page=${page}&channel_id=${channel_id}`;
        this.$ajax.get(`/api/v1/agent/${agent_id}/order` + query).then(res => {

          this.current_page = res.data.data.meta.current_page;
          // 判断是否还能加载
          this.more= true

          if(page === res.data.data.meta.last_page || res.data.data.meta.last_page === 1){
            this.more = false
          }
          // 总单数
          this.order_total = res.data.data.meta.total

          if (page > 1) {
            this.list.push(...res.data.data.data);
          } else {
            this.list = res.data.data.data
          }
          this.loading = false
        }).catch(reason => {
          console.log(reason)
        })
      },
      getOrdersWeek(agent_id, channel_id = '') {
        if (!agent_id) {
          this.list = [];
          return false;
        }
        let query = `?status=${this.status_payoff}&channel_id=${channel_id}`;
        this.$ajax.get(`/api/v1/agent/${agent_id}/order_week` + query).then(res => {
          this.week = res.data.data.dates;
          this.orders_count = res.data.data.orders_count
        }).catch(reason => {
          console.log(reason)
        })
      },
      getAgents() {
        this.agents = JSON.parse(localStorage.getItem('agents'))
        if (!this.agents) {
          this.$router.push('/agent')
        }
      },
      getAgentId(brand_id = false) {
        if (!brand_id) {
          brand_id = this.brand_id
        }
        let agent = this.agents.find(item => {
           return item.brand_id === brand_id
        });
        if (agent) {
          return agent.id
        }
        return ''
      },
      handleScroll(e) {
        if((e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 10)
          && !this.loading && this.more) {
          this.loadingMore()
        }
      },
      loadingMore() {
        this.loading = true;
        this.getOrders(this.getAgentId(this.brand_id), this.current_page + 1)
      },
      getOrderType() {
        this.$ajax.get('/api/v1/channel' + '?size=100').then(res => {
          this.order_type = res.data.data.data
        }).catch(error => {
          console.log(error)
        })
      }
    },
    mounted() {
      this.getOrders(this.getAgentId());
    },
    created() {
      this.getAgents();
      this.getOrdersWeek(this.getAgentId());
      this.getOrderType();
    },
    watch: {
      orders_count() {
        this.drawLine()
      }
    }
  }
</script>

<style scoped>
  .order {
    height: 100%;
    overflow: hidden;
    background: #ffffff;
  }
  .nav {
    height: .95rem;
    /*line-height: .95rem;*/
    display: flex;
    background: #ffffff;
  }
  .nav a {
    flex: 1;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-item {
    position: relative;
    font-size: .24rem;
    font-weight: 500;
    color: #B5B5B5;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .nav-item.is_selected {
    color: #448EF6;
  }
  .is_selected:before {
    content: "";
    position: absolute;
    display: inline-block;
    width: .4rem;
    left: 50%;
    margin-left: -.2rem;
    bottom: 0;
    height: 2px;
    background: #448EF6;
  }
  .overview {
    height: 4.97rem;
    position: relative;
  }
  .overview-head {
    height: .44rem;
    margin-top: .25rem;
    margin-right: .32rem;
    margin-left: .34rem;
  }
  .order-title {
    height: .75rem;
    line-height: .75rem;
    color: #B5B5B5;
    font-size: .2rem;
    padding-left: .32rem;
  }
  .order-block {
    padding-left: .32rem;
  }
  .order-item {
    height: 1.36rem;
    padding-right: .32rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .order-item-title,.order-item-username {
    overflow: hidden;
  }
  .order-item-title {
    height: .4rem;
    line-height: .4rem;
    /*margin-top: .2rem;*/
  }
  .order-item-username {
    height: .33rem;
    line-height: .33rem;
    margin-top: .2rem;
  }
  .order-list {

  }
  .order-name, .user-name {

    float: left;
  }
  .order-name {
    font-size: .28rem;
    font-weight: 400;
    color: #515151;
    /*overflow:hidden;*/
    /*text-overflow:ellipsis;*/
    /*white-space:nowrap*/
  }
  .user-name {
    font-size: .24rem;
    font-weight: 400;
    color: #B5B5B5;
  }
  .price {
    /*margin-left: 1.06rem;*/
    /*margin-right: .79rem;*/
    font-size: .32rem;
    font-weight: 500;
    color: #448EF6;
    float: right;
  }
  .order-date {
    float: right;
    font-size: .2rem;
    font-weight: 400;
    color: #B5B5B5;
    /*width: 1rem;*/
    /*overflow:hidden;*/
    /*text-overflow:ellipsis;*/
    /*white-space:nowrap*/
  }
  .current-name {
    font-size: .24rem;
    font-weight: 500;
    float: left;
  }
  .switch-block-button {
    float: right;
    line-height: .44rem;
    width: 1.2rem;
    background:rgba(0,0,0,0.05);
    border-radius: .05rem;
    text-align: center;
    font-size: .24rem;
    font-weight: 400;
  }
  .order-count-wrapper {
    text-align: center;
  }
  .order-count {
    font-size: .6rem;
    font-weight: 500;
    color: #28B2FE;
    margin-top: .16rem;
  }
  .order-count .unit {
    font-size: .24rem;
  }
  .order-count-name {
    color: #B5B5B5;
    font-size: .2rem;
    font-weight: 400;
  }
  .switch-block {
    position: absolute;
    top: 0;
    right: .33rem;
    height: 4.52rem;
    overflow: scroll;
    width: 1.85rem;
    box-shadow:0px 6px 12px 0px rgba(0,0,0,0.2);
    border-radius: .08rem;
    font-size: .28rem;
    background: #ffffff;
    z-index: 1;
  }
  .switch-block li {
    height: .75rem;
    line-height: .75rem;
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .overview-line {
    height: 120px;
    margin-top: .6rem;
  }
  .order-content {
    overflow: scroll;
    position: fixed;
    top: .95rem;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .loading {
    height: .5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .28rem;
  }
  .description {
    margin-left: .1rem;
    color: #515151;
  }
</style>
