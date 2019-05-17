<template>
  <div class="wrapper">
    <div class="select-box">
      <div class="title border-bottom"><img src="@/assets/img/x.png" alt="" @click="handleClose">选择提现到</div>
      <div class="select-item">
        <ul>
          <li class="border-bottom" @click="addSelect(card)" v-for="(card, index) in cards">
            <img src="@/assets/img/bank_card.png" alt="">
            <div class="item">
              <div class="item-title">{{card.name}} ({{card.account}})</div>
              <div class="description">一次性转账≤￥20000.00</div>
            </div>
          </li>
          <!--<li class="border-bottom" @click="addSelect('wx')">-->
            <!--<img src="@/assets/img/logo-wx.png" alt="">-->
            <!--<div class="item">-->
              <!--<div class="item-title">微信</div>-->
              <!--<div class="description">一次性转账≤￥20000.00</div>-->
            <!--</div>-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectItem",
    props: [],
    data() {
      return {
        cards: [],
        agents: []
      }
    },
    methods: {
      addSelect(card) {
        this.$emit('addSelectEvent', card)
      },
      handleClose() {
        this.$emit('handleCloseEvent')
      },
      getCard() {
         this.agents = JSON.parse(localStorage.getItem('agents'));
        if (!this.agents) {
          this.getAgents()
        }

        var temp = [];
        let cards = this.agents.map(agent => {
          return {
            name: agent.bank,
            account: this.getAccount(agent.bank_card),
            agent_id: agent.id
          }
        });
        let cards_new = [];
        for (let i = 0; i < cards.length; i++) {
          if(!temp[cards[i].account]) {
            cards_new.push(cards[i]);
          }
          temp[cards[i].account] = true;
        }
        this.cards = cards_new;
      },
      getAccount(account) {
        //if (this.show_card)
        return account.substring(0, account.length-8) + '****' + account.substring(account.length - 4)
      },
      getAgents() {
        this.$ajax.get('/api/v1/agent').then(res => {
          if (res.data.data.data) {
            this.agents = res.data.data.data
            localStorage.setItem('agents', JSON.stringify(res.data.data.data))
          }
        })

      }
    },
    created() {
      this.getCard();
    }
  }
</script>

<style scoped>
  .wrapper {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  .select-box {
    width: 100%;
    background: #ffffff;
    position: fixed;
    /*height: 2rem;*/
    bottom: 0;
  }

  .title {
    text-align: center;
    color: #B5B5B5;
    font-weight: 500;
    font-size: .24rem;
    height: .98rem;
    line-height: .98rem;
    position: relative;
  }

  .title img {
    width: .28rem;
    height: .28rem;
    position: absolute;
    left: .32rem;
    bottom: .34rem;
  }

  .select-item {
    padding-left: .32rem;
  }

  ul li {
    padding-top: .3rem;
    height: 1.3rem;
    position: relative;
    box-sizing: border-box;
  }

  ul li img {
    position: absolute;
    top: .3rem;
    width: .44rem;
    height: .44rem;
    margin-right: .3rem;
    display: inline-block;
  }

  .item {
    display: inline-block;
    margin-left: .74rem;
  }

  .item .title {
    color: #515151;
    font-size: .28rem;
    font-weight: 400;
  }

  .item .description {
    font-size: .2rem;
    font-weight: 400;
    color: #B5B5B5;
    margin-top: .3rem;
  }

  .item-title {
    color: #515151;
    font-size: .28rem;
  }
</style>
