<template>
    <div class="wrapper">
      <Empty v-show="empty_show" info="暂无零钱提现记录" :icon="empty_icon"></Empty>

      <ul class="bill-list" v-show="!empty_show">
        <li v-for="item of draws">
          <div class="bill-icon">
            <img src="@/assets/img/wallet@2x.png" alt="">
          </div>
          <div class="bill-content border-bottom">
            <div class="bill-detail">
              <span class="bank-info">零钱提现-{{item.bank}}(尾号{{item.bank_card.substring(item.bank_card.length - 4)}})</span>
              <span class="bill-price">￥{{item.amount}}</span>
            </div>
            <div class="bill-date-wrapper">
              <div class="bill-date">{{item.created_at}}</div>
              <div class="bill-status">{{item.status==0 ? '' : '提现申请已提交'}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  // import Header from "../common/Header"
  import Empty from '../common/Empty'
  export default {
    name: "Bill",
    components: {
      Empty
    },
    data() {
      return {
        title: '账单',
        empty_show: false,
        draws: [],
        empty_icon: {
          url: require("@/assets/img/bill_icon.png")
        }
      }
    },
    methods: {
      getDraws() {
        this.$ajax.get('/api/v1/draw').then(res => {
          let _this = this
          if (res.data.code == 200) {
            this.draws = res.data.data.data
            if (this.draws.length == 0) {
              this.empty_show = true
            }
          }
        })
      }
    },
    created() {
      this.getDraws()
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
    line-height: 1.45rem;
    background: #ffffff;
  }
  .bill-icon {
    float: left;
    width: 1.05rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .bill-date-wrapper {
    height: .33rem;
  }
  .bill-date {
    height: .33rem;
    line-height: .33rem;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 400;
    margin-top: .1rem;
    float: left;
  }
  .bill-status {
    margin-top: .1rem;
    font-size: .2rem;
    height: .33rem;
    float: right;
    line-height: .33rem;
    color: #28A6FE;
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
    float: left;
  }
</style>
