<template>
  <div class="wrapper">

    <SelectItem v-show="showSelect" :is_show="showSelect" v-on:addSelectEvent="addSelect" v-on:handleCloseEvent = "handleColse"></SelectItem>
    <!--<Header :title="title" to="/salary"></Header>-->
    <div class="container">
      <div class="withdraw-title border-bottom" @click="handleSelect">
        <!--<div class="withdraw-wx" v-show="!show_card">-->
          <!--<span class="input-title">提现到</span>-->
          <!--<div class="card-main">-->
            <!--<img class="card-icon" src="@/assets/img/logo-wx.png" alt="">-->
            <!--<span>微信</span>-->
            <!--<div class="description">一次性转账≤￥5000.00</div>-->
          <!--</div>-->
          <!--<img class="into-icon" src="@/assets/img/into_normal.png" alt="">-->
        <!--</div>-->
        <div class="withdraw-card">
          <div class="input-title">提现到</div>
          <div class="card-main">
            <img class="card-icon" src="@/assets/img/bank_card.png" alt="">
            <div class="card-content">
              <div>银行卡 ({{this.getFormatAccount()}})</div>
              <div class="description">一次性转账≤￥20000.00</div>
            </div>
          </div>
          <img class="into-icon" src="@/assets/img/into_normal.png" alt="">
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
  // import Header from "../common/Header"
  import SelectItem from '../common/SelectItem'
  export default {
    name: "Withdraw",
    components: {
      SelectItem,
      // Header
    },
    data() {
      return {
        showSelect: false,
        title: '收益提现',
        show_card: false,
        card: {
          name: '微信',
          account: '',
          agent_id: ''
        },
        total: '',
        salary: 0,
        agent_id : '',
      }
    },
    methods: {
      handleSelect() {
        this.showSelect = true
      },
      addSelect(card) {
        this.agent_id = card.agent_id;
        console.log(card)
        if (card === 'wx') {
          this.show_card = false;
          this.card.name = '微信'
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
        let data = {
          amount: this.total,
          agent_id: this.card.agent_id,
        }
        this.$ajax.post('/api/v1/draw', data).then(res => {
          if (res.data.code === 200) {
            alert('提交成功')
            this.$router.push({
              path: '/withdraw_info',
              query: {total: this.total, bank: this.card.name, bank_card: this.getFormatAccount()}
            })
          }
        }).catch(error => {

        })
      },
      handleAll() {
        this.total = this.salary
      },
      getFormatAccount() {
        //if (this.show_card)
          return this.card.account.substring(0, this.card.account.length-8) + '****' + this.card.account.substring(this.card.account.length - 4)
      },
      init() {
        if (this.$route.query.salary) {
          this.salary = this.$route.query.salary
        }

        // 代理
        const agents = JSON.parse(localStorage.getItem('agents'));
        let agent = agents[0];
        this.card.account = agent.bank_card
        this.card.name = agent.bank
        this.card.agent_id = agent.id
      },
      handleChange(e) {
        console.log(e)
      }
    },
    mounted() {
      this.$refs.withdraw.focus()
    },
    created() {
      this.init()
    },
    watch: {
      total(val) {
        if (val === '') {
          return
        }
        if (val > Number(this.salary)) {
          this.total = ''
        }
      }
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
    background: #ffffff;
    margin-left: .32rem;
    margin-top: .39rem;
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
    line-height: .28rem;
    color: #B5B5B5;
    font-size: .2rem;
    font-weight: 400;
    margin-top: .1rem;
  }
  .into-icon {
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
    color: #B5B5B5;
    font-weight: 500;
    font-size: .2rem;
    float: left;
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
    /*margin-left: .4rem;*/
    margin-right: .1rem;
  }
  .withdraw-card, .withdraw-wx {
    display: flex;
    font-size: .28rem;
    height: 1.3rem;
    padding-top: .31rem;
    box-sizing: border-box;
    justify-content: space-between;
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
