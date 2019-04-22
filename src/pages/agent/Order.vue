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
        <li class="order-item border-bottom" v-for="item in list">
          <span class="user-name">{{item.name}}</span>
          <span class="order-name">{{item.order_name}}</span>
          <span class="price">￥{{item.price}}</span>
          <span class="order-date">{{item.date}}</span>
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
        list: [
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },
          {
            name: '崔洋',
            order_name: '医学正高',
            price: '90.00',
            date: '2018/06/01'
          },

        ]
      }
    },
    methods: {
      handleSwitch(type) {
        this.type = type
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
        // 基于准备好的dom，初始化echarts实例
        console.log(this.$refs.orderline)
        let myChart = echarts.init(this.$refs.orderline)
        // 绘制图表
        let option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            boundaryGap: false
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
            data: [10, 200, 901, 200, 1290, 1330, 500],
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
      }
    },
    mounted() {
      this.drawLine()
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
