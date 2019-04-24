<template>
  <div class="agent-not">
    <img src="/static/images/agent-icon.png" alt="" class="icon">
    <div class="title">你还不是创序医考的代理</div>
    <router-link :to="to">
      <div class="button">申请代理</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "AgentNot",
    data() {
      return {
        to: '/apply'
      }
    },
    methods: {
      init() {
        console.log(localStorage.getItem('agents'))
        if (localStorage.getItem('agents')) {
          this.to = "/becomes"
        }
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped>
  .agent-not {
    text-align: center;
  }
  .agent-not img {
    height: 1.5rem;
    width: 1.45rem;
  }
  .icon {
    margin-top: 3.18rem;
  }
  .title {
    color: #515151;
    font-size: .28rem;
    font-weight: 400;
    margin-top: .2rem;
    margin-bottom: .28rem;
  }
  .button {
    height: .76rem;
    line-height: .76rem;
    background: #28B2FE;
    width: 2.74rem;
    text-align: center;
    margin: 0 auto;
    border-radius: .08rem;
    color: #ffffff;
    font-size: .28rem;
    font-weight: 400;
  }
</style>
