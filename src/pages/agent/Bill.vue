<template>
    <div class="wrapper">
      <Header :title="title" to="/agent/earnings" ></Header>
      <Empty v-show="empty_show" info="暂无零钱提现记录" icon="/static/images/bill_icon.png"></Empty>

      <ul class="bill-list" v-show="!empty_show">
        <li>
          <div class="bill-icon">
            <img src="/static/images/wallet@2x.png" alt="">
          </div>
          <div class="bill-content border-bottom">
            <div class="bill-detail">
              <span class="bank-info">零钱提现-XX银行（尾号9076）</span>
              <span class="bill-price">￥2500.00</span>
            </div>
            <div class="bill-date">2019/3/27 09:31</div>
          </div>
        </li>
        <li>
          <div class="bill-icon">
            <img src="/static/images/wallet@2x.png" alt="">
          </div>
          <div class="bill-content">
            <div class="bill-detail">
              <span class="bank-info">零钱提现-XX银行（尾号9076）</span>
              <span class="bill-price">￥2500.00</span>
            </div>
            <div class="bill-date">2019/3/27 09:31</div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import Header from "../common/Header"
  import Empty from '../common/Empty'
  export default {
    name: "Bill",
    components: {
      Header,
      Empty
    },
    data() {
      return {
        title: '账单',
        empty_show: false
      }
    },
    methods: {
      test() {
        alert(11)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;

  }
  .block-wrapper {
    background: #ffffff;
    padding-left: .32rem;
    padding-right: .32rem;
  }

  .icon-wrapper img {
    height: .44rem;
    width: .4rem;
  }
  .bill-list li {
    height: 1.2rem;
    /*line-height: 1.45rem;*/
    background: #ffffff;
  }
  .bill-icon {
    float: left;
    width: 1.05rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
  }

  .bill-icon img {
    height: .44rem;
    width: .4rem;
  }
  .bill-content {
    float: right;
    height: 1.2rem;
    width: 6.13rem;
    padding-right: .32rem;
  }
  .block-title {
    float: left;
    height: 1.2rem;
  }
  .bill-money {
    float: right;
    font-size: .48rem;
    font-weight: 500;
    color: #28B2FE;
  }
  .bill-title {
    height: .42rem;
    line-height: .42rem;
    margin-top: .4rem;
    margin-bottom: .1rem;
  }
  .bill-date {
    height: .33rem;
    line-height: .33rem;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 400;
    margin-top: .1rem;
  }
  .bill-detail {
    height: .4rem;
    line-height: .4rem;
    margin-top: .21rem;
  }
  .bill-price {
    float: right;
    font-size: .28rem;
    font-weight: 500;
    color: #515151;
  }
  .bank-info {
    font-size: .28rem;
    font-weight: 500;
    color: #515151;
  }
</style>
