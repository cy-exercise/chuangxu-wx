<template>
  <div class="wrapper">
    <SelectItem v-show="showSelect" :is_show="showSelect" v-on:addSelectEvent="addSelect" v-on:handleCloseEvent = "handleColse"></SelectItem>
    <Header :title="title" to="/salary"></Header>
    <div class="container">
      <div class="withdraw-title border-bottom" @click="handleSelect">
        <div class="withdraw-wx" v-show="!show_card">
          <span class="input-title">提现到</span>
          <div class="card-main">
            <img class="card-icon" src="/static/images/logo-wx.png" alt="">
            <span>微信</span>
            <div class="description">一次性转账≤￥5000.00</div>
          </div>
          <img class="into-icon" src="/static/images/into_normal.png" alt="">
        </div>
        <div class="withdraw-card" v-show="show_card">
          <span class="input-title">提现到</span>
          <div class="card-main">
            <img class="card-icon" src="/static/images/bank_card.png" alt="">
            <span>银行卡 ({{card.account}})</span>
            <div class="description">一次性转账≤￥20000.00</div>
          </div>
          <img class="into-icon" src="/static/images/into_normal.png" alt="">
        </div>
      </div>
      <div class="withdraw-input border-bottom">
        <div class="input-title">提现金额</div>
        <div class="imput-wrapper">
          <span>￥</span>
          <input type="number" placeholder="" ref="withdraw" v-model="total">
        </div>
      </div>
      <div class="withdraw-submit" :class="{submit: total}">
        <div class="submit-title">
          <span class="salary">工资余额￥{{salary}}，</span>
          <span class="all" @click="handleAll">全部提现</span>
        </div>
        <div class="button" @click="handleSubmit">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../common/Header"
  import SelectItem from '../common/SelectItem'
  export default {
    name: "Withdraw",
    components: {
      SelectItem,
      Header
    },
    data() {
      return {
        showSelect: false,
        title: '收益提现',
        show_card: false,
        card: {
          name: '',
          account: ''
        },
        total: '',
        salary: '2500.00'
      }
    },
    methods: {
      handleSelect() {
        this.showSelect = true
      },
      addSelect(card) {
        if (card === 'wx') {
          this.show_card = false;
        } else {
          this.show_card = true;
          this.card = card
        }
        this.showSelect = false
      },
      handleColse() {
        this.showSelect = false;
      },
      handleSubmit() {
        if (!this.total) {
          return false;
        }
        // 先提交后台处理
        // 跳转
        if (true) {
          this.$router.push('/withdraw_info')
        }
      },
      handleAll() {
        this.total = this.salary
      }
    },
    mounted() {
      this.$refs.withdraw.focus()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
  }
  .container {
    width: 6.86rem;
    /*height: 4.87rem;*/
    background: #ffffff;
    margin-left: .32rem;
    margin-top: .39rem;
    /*padding-top: .26rem;*/
    /*padding-bottom: .4rem;*/
    padding-left: .4rem;
    padding-right: .4rem;
    box-sizing: border-box;
  }
  .withdraw-title {
    height: 1.3rem;
    position: relative;
  }
  .withdraw-wx {
    display: flex;
  }
  .title-left-item span {
    color: #B5B5B5;
    font-size: .2rem;
    font-weight: 500;
  }
  .title-left-item img {
    height: .44rem;
    width: .44rem;
    margin-left: .49rem;
  }
  .description {
    position: absolute;
    bottom: .3rem;
    left: 1.53rem;
    color: #B5B5B5;
    font-size: .2rem;
    font-weight: 400;
  }
  .into-icon {
    position: absolute;
    bottom: .46rem;
    right: 0;
    height: .36rem;
    width: .36rem;
  }
  .withdraw-input {
    height: 1.66rem;
    text-align: left;
    margin-top: .32rem;
    position: relative;
  }
  .input-title {
    text-align: left;
    margin-top: .1rem;
    color: #B5B5B5;
    font-weight: 500;
    font-size: .2rem;
  }
  .imput-wrapper {
    position: absolute;
    bottom: .16rem;
    display: flex;
    height: .7rem;
  }
  .imput-wrapper span {
    font-size: .5rem;
    font-weight: 500;
    height: .7rem;
    /*line-height: .7rem;*/
    width: .5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .imput-wrapper input {
    font-size: .5rem;
    font-weight: 500;
    width: 5.4rem;
    padding-left: .1rem;
    box-sizing: border-box;
  }
  .withdraw-submit {
    height: 1.92rem;
  }
  .button {
    background:rgba(40,178,254,0.5);
    font-weight: 400;
    font-size: .28rem;
    color: #ffffff;
    width: 6.06rem;
    height: .76rem;
    line-height: .76rem;
    border-radius: .08rem;
    /*margin-top: .2rem;*/
    text-align: center;
  }
  .submit .button {
    background: #28B2FE;
  }
  .submit-title {
    height: .76rem;
    line-height: .76rem;
  }
  .salary {
    color: #B5B5B5;
    font-weight: 400;
    font-size: .2rem;
  }
  .submit-title {
    font-size: .28rem;
  }
  .submit-title .all {
    color: #28B2FE;
    font-weight: 400;
    font-size: .2rem;
  }
  .card-icon {
    height: .34rem;
    width: .44rem;
    display: inline-block;
    margin-left: .4rem;
    margin-right: .1rem;
  }
  .withdraw-card, .withdraw-wx {
    display: flex;
    font-size: .28rem;
    height: 1.3rem;
    padding-top: .31rem;
    box-sizing: border-box;
  }
  .card-main {
    font-size: .28rem;
    display: flex;
  }
  .card span {
    /*font-size: .28rem;*/
  }
  .withdraw-wx .card-icon {
    width: .44rem;
    height: .44rem;
  }
</style>
