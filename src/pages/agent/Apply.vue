<template>
  <div class="apply">
    <Header title="政策和义务" to="/user"></Header>
    <div class="apply-content">
      <div class="content-head border-bottom">关于申请代理的协议与介绍</div>
      <p class="content">从 2015 年 4 月起，Ant Design 在蚂蚁金服中后台产品线迅速推广，对接多条业务线，覆盖系统 800 个以上。定位于中台业务的 Ant Design 兼顾专业和非专业的设计人员，具有学习成本低、上手速度快、实现效果好等特点，并且提供从界面设计到前端开发的全链路生态，可以大大提升设计和开发的效率。</p>
      <div class="apply-img"></div>
    </div>
    <div class="button">同意并继续申请</div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "Apply",
    components: {
      Header
    }
  }
</script>

<style scoped>
  .apply-content {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .content-head {
    height: 1.1rem;
    line-height: 1.1rem;
    color: #515151;
    font-size: .32rem;
    font-weight: 500;
  }
  .content {
    color: #515151;
    font-size: .28rem;
    margin-top: .39rem;
    letter-spacing: .02rem;
    line-height: .4rem;
  }
  .apply-img {
    height: 5.88rem;
  }
  .button {
    height: .76rem;
    line-height: .76rem;
    background: #448EF6;
    width: 4.96rem;
    text-align: center;
    margin-left: 1.27rem;
    border-radius: .08rem;
    color: #ffffff;
    font-size: .28rem;
    font-weight: 400;
  }
</style>
