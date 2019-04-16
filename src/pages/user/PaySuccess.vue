<template>
  <div>
    <Header title="订单报价" to="/user"></Header>
    <div class="wrapper">
      <img src="/static/images/order_complete.png" alt="">
      <div class="complete-title">支付成功！</div>
      <p class="complete-content">点击个人中心“进行中的项目” <br>随时查看项目进度</p>
      <router-link to="/user">
        <div class="complete-botton">完成</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "PaySuccess",
    components: {
      Header
    },
    data() {
      return {
        to: '-1'
      }
    },
    methods: {
      handleRoute(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    text-align: center;
    padding: 0 .32rem;
  }
  .wrapper img {
    height: 1.8rem;
    width: 1.8rem;
    margin-top: 1.63rem;
  }
  .complete-title {
    margin-top: .44rem;
    font-size: .32rem;
    color: #515151;
  }
  .complete-content {
    line-height: .42rem;
    font-size: .3rem;
    font-weight: 400;
  }
  .complete-botton {
    height: .96rem;
    line-height: .96rem;
    width: 100%;
    margin-top: 1.23rem;
    background: #28B2FE;
    color: #ffffff;
    font-size: .3rem;
    border-radius: .1rem;
  }
  .jump-price-setting {
    margin-top: .4rem;
    font-size: .3rem;
    color: #28B2FE;
  }
</style>
