<template>
  <div>
    <div class="title">收益提现</div>
     <div class="step-wrapper">
       <StepWithdraw></StepWithdraw>
     </div>
    <div class="info-wrapper">
      <div class="total-money border-top">
        <div class="withdraw-title">提现金额</div>
        <div class="withdraw-money">￥{{total}}</div>
      </div>
      <div class="bank-account">
        <div class="withdraw-title">到银行账户</div>
        <div class="withdraw-money">{{bank}}&nbsp;&nbsp;({{bank_card}})</div>
      </div>
    </div>
    <router-link to="/salary">
      <div class="button">完成</div>
    </router-link>
  </div>
</template>

<script>
  import  StepWithdraw from "../common/StepWithdraw";
  export default {
    name: "WithdrawInfo",
    components: {
      StepWithdraw
    },
    data() {
      return {
        total: '',
        bank_card: '',
        bank: ''
      }
    },
    methods: {
      init() {
        let query = this.$route.query;
        this.total = query.total;
        this.bank_card = query.bank_card;
        this.bank = query.bank;
      }
    },
    created() {
      this.init();
    }
  }
</script>

<style scoped>
  .title {
    height: .5rem;
    line-height: .5rem;
    color: #515151;
    font-size: .36rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1.13rem;
  }

  .message-wrapper {
    padding-left: 1.8rem;
  }

  .message {
    height: 1.16rem;
  }

  .circle img {
    width: .39rem;
    height: .39rem;

  }
  .info-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .button {
    width: 4rem;
    height: .76rem;
    line-height: .76rem;
    color: #28B2FE;
    position: fixed;
    bottom: 1rem;
    left: 1.75rem;
    border-radius: .1rem;
    border: .02rem solid #28B2FE;
    text-align: center;
    font-size: .28rem;
  }
  .total-money {
    height: .88rem;
    position: relative;
  }
  .withdraw-title {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #B5B5B5;
    font-size: .28rem;
    font-weight: 400;
    height: .4rem;
    line-height: .4rem;
  }
  .withdraw-money {
    position: absolute;
    right: 0;
    bottom: 0;
    height: .4rem;
    line-height: .4rem;
    color: #515151;
    font-size: .28rem;
    font-weight: 500;
  }
  .bank-account {
    position: relative;
    height: .88rem;
  }
</style>
