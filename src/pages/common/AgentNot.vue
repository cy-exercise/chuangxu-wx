<template>
  <div class="agent-not">
    <img src="/static/images/agent-icon.png" alt="" class="icon">
    <div class="title">你还不是创序{{brand_name}}的代理</div>
    <router-link :to="to">
      <div class="button">申请代理</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "AgentNot",
    props:{
      brand: {
        default: 'nurse'
      }
    },
    data() {
      return {
        to: '/apply',
        brand_name: '护考',
        brand_map: {
          'nurse': '护考',
          'bao': '医考宝',
          'medical': '医考',
        }
      }
    },
    methods: {
      init() {
        let agents = JSON.parse(localStorage.getItem('agents'))
        if (agents.length > 0) {
          this.to = "/becomes"
        }
        this.brand_name = this.brand_map[this.brand]
      }
    },
    created() {
      this.init()
    },
    watch: {
      brand() {
        this.brand_name = this.brand_map[this.brand]
      }
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
