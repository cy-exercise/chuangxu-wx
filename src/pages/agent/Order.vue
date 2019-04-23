<template>
  <div class="order">
    <Header title="我的业绩" to="/agent"></Header>
    <div class="nav border-bottom">
      <router-link to="">
        <div class="nav-item" :class="{is_selected: 'nurse'=== type}" @click="handleSwitch('nurse')">创序护考</div>
      </router-link>
      <router-link to="">
        <div class="nav-item" :class="{is_selected: 'medical'=== type}" @click="handleSwitch('medical')">创序医考</div>
      </router-link>
      <router-link to="">
        <div class="nav-item" :class="{is_selected: 'bao'=== type}" @click="handleSwitch('bao')">创序医考宝</div>
      </router-link>
    </div>
    <div class="overview">
      <div class="overview-head">
        <div class="current-name">全部</div>
        <div class="switch-block-button" v-show="!switch_show" @click="showSwitch">切换</div>
        <ul class="switch-block" v-show="switch_show">
          <li class="all border-bottom">全部</li>
          <li class="border-bottom" v-for="type in order_type" @click="switchType">{{type}}</li>
        </ul>
      </div>
      <div class="order-count-wrapper">
        <div class="order-count">123<span class="unit">单</span></div>
        <div class="order-count-name">我的业绩</div>
      </div>
      <div class="overview-line" ref="orderline">

      </div>
    </div>
    <div style="height: .15rem;background: #F8F8F8;"></div>
    <div class="order-list">
      <div class="order-title border-bottom">下单详情</div>
      <ul
        class="order-block"

      >
        <li class="order-item border-bottom" v-for="item in list" >
          <span class="user-name">{{item.user.name}}</span>
          <span class="order-name">{{item.order_details[0].product.title}}</span>
          <span class="price">￥{{item.price}}</span>
          <span class="order-date">{{item.created_at}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  var echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require ('echarts/theme/macarons');
  // import echarts from 'echarts'
  export default {
    name: "Order",
    components: {
      Header
    },
    data() {
      return {
        type: 'nurse',
        loading: false,
        switch_show: false,
        order_type: ['医学','护理', '药学', '医技', '其他'],
        brand_id_map: {
          bao: '53b7715b-95cd-4d18-bc88-0f48dc5b4623',
          nurse: '5946661e-d8a2-49be-9202-b231ca907739',
          medical: '23f2efa5-2cbe-4060-bbbb-79bc8a64481a'
        },
        brand_id: '5946661e-d8a2-49be-9202-b231ca907739',
        agents: {},
        list: {},
        week: [],
        orders_count: []
      }
    },
    methods: {
      handleSwitch(type) {
        this.type = type;
        this.brand_id = this.brand_id_map[type];
        let agent_id = this.getAgentId(this.brand_id);
        console.log(agent_id);
        this.getOrders(agent_id);
        this.getOrdersWeek(agent_id);
      },
      showSwitch() {
        this.switch_show = true
      },
      switchType() {
        alert(1);
        this.switch_show = false;
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
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
            left: '0',
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
      getOrders(agent_id) {
        let query = `?status=0`;
        this.$ajax.get(`/api/v1/agent/${agent_id}/order` + query).then(res => {
          this.list = res.data.data.data
        }).catch(reason => {
          console.log(reason)
        })
      },
      getOrdersWeek(agent_id) {
        let query = `?status=0`;
        this.$ajax.get(`/api/v1/agent/${agent_id}/order_week` + query).then(res => {
          this.week = res.data.data.dates;
          this.orders_count = res.data.data.orders_count
        }).catch(reason => {
          console.log(reason)
        })
      },
      getAgents() {
        this.agents = JSON.parse(localStorage.getItem('agents'))
      },
      getAgentId(brand_id = false) {
        if (!brand_id) {
          brand_id = this.brand_id
        }
        brand_id = '13245646'
        let agent = this.agents.find(item => {
           return item.brand_id == brand_id
        });
        console.log(agent)
        return agent.id
      }
    },
    mounted() {
      //this.drawLine(this.week, this.orders_count);
      this.getOrders(this.getAgentId());
    },
    created() {
      this.getAgents();
      this.getOrdersWeek(this.getAgentId());
    },
    watch: {
      week() {
        this.drawLine()
      }
    }
  }
</script>

<style scoped>
  .order {
    height: 100%;
    overflow: hidden;
  }
  .nav {
    height: .95rem;
    line-height: .95rem;
    display: flex;
  }
  .nav a {
    flex: 1;
    text-align: center;
  }
  .nav-item {
    position: relative;
    font-size: .24rem;
    font-weight: 500;
    color: #B5B5B5;
  }
  .nav-item.is_selected {
    color: #448EF6;
  }
  .is_selected:after {
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
  .order-item {
    height: .95rem;
    line-height: .95rem;
    margin-left: .32rem;
    padding-right: .32rem;
  }
  .order-item span {
    float: left;
  }
  .order-item .order-date{
    float: right;
  }
  .order-list {
    height: 5.98rem;
    overflow: scroll;
  }
  .order-name, .user-name {
    font-size: .28rem;
    font-weight: 400;
    color: #515151;
  }
  .order-name {
    margin-left: 1.06rem;
    width: 1.1rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .price {
    margin-left: 1.06rem;
    /*margin-right: .79rem;*/
    font-size: .32rem;
    font-weight: 500;
    color: #448EF6;
  }
  .order-date {
    font-size: .2rem;
    font-weight: 400;
    color: #B5B5B5;
    width: 1rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
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
  }
  .overview-line {
    height: 120px;
    margin-top: .6rem;
  }
</style>
