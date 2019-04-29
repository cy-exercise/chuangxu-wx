<template>
  <div class="wrapper">
    <div class="select-box">
      <div class="title border-bottom"><img src="/static/images/x.png" alt="" @click="handleClose">选择提现到</div>
      <div class="select-item">
        <ul>
          <li class="border-bottom" @click="addSelect(card)" v-for="(card, index) in cards">
            <img src="/static/images/bank_card.png" alt="">
            <div class="item">
              <div class="item-title">{{card.name}} ({{card.account}})</div>
              <div class="description">一次性转账≤￥20000.00</div>
            </div>
          </li>
          <!--<li class="border-bottom" @click="addSelect('wx')">-->
            <!--<img src="/static/images/logo-wx.png" alt="">-->
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
        cards: [
          {
            name: 'xx银行',
            account: '567345345434****2348'
          },
          {
            name: 'xx银行',
            account: '567345345434****2345'
          }
        ]
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
        const agents = JSON.parse(localStorage.getItem('agents'));

        var temp = [];
        let cards = agents.map(agent => {
          return {
            name: agent.bank,
            account: agent.bank_card,
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
