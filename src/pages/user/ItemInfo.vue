<template>
  <div class="wrapper">
    <Header title="项目详情" to="/user"></Header>
    <div class="order-item">
      <img src="@/assets/img/logo.png" alt="" class="logo">
      <div class="order-title">论文润色</div>
      <div class="price">￥3409.00</div>
    </div>
    <div class="step-wrapper" v-show="step_show">
      <Step></Step>
    </div>
    <div style="height: .2rem;"></div>
    <div class="item-info-wrapper">
      <div class="item-info-title border-bottom">项目详情</div>
      <ul class="detail-block">
        <li>
          <span>抄袭指数：</span>
          <span>23%</span>
        </li>
        <li>
          <span>字 数：</span>
          <span>1673</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Step from "../common/Step"
  import Header from "../common/Header"
  export default {
    name: "ItemInfo",
    components: {
      Step,
      Header
    },
    data() {
      return {
        step_show: false
      }
    },
    methods: {
      init() {
        let status = this.$route.params.status
        if (status === 'doing') {
            this.step_show = true
        }
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
  }
  .order-item {
    position: relative;
    text-align: center;
    background: #ffffff;
    padding-top: .6rem;
    padding-bottom: .8rem;
  }
  .order-title {
    font-size: .24rem;
    margin-top: .12rem;
    height: .33rem;
    line-height: .33rem;
    font-weight: 500;
  }
  .price {
    font-size: .5rem;
    margin-top: .33rem;
    height: .7rem;
    line-height: .7rem;
  }
  .logo {
    width:60px;
    height:60px;
  }
  .item-info-wrapper {
    padding-left: .32rem;
    padding-right: .32rem;
    background: #ffffff;
    padding-bottom: .2rem;
  }
  .item-info-title {
    height: .75rem;
    line-height: .75rem;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
  .detail-block {
    margin-top: .39rem;
  }
  .detail-block li {
    height: .42rem;
    line-height: .42rem;
    margin-bottom: .2rem;
  }
  .detail-block  li span {
    color: #515151;
    font-size: .3rem;
    font-weight: 400;
  }
  .step-wrapper {
    background: #ffffff;
    padding-left: 1.64rem;
  }
</style>
