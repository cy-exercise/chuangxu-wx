<template>
  <div class="register">
    <Header title="填写基本信息" to="/user"></Header>
    <div class="info-wrapper">
      <div class="base-info">
        <div class="base-title">申请代理的账号（手机号码）</div>
        <div class="base-input">
          <div class="input-name">姓 名</div>
          <input type="text" placeholder="请输入真实姓名">
        </div>
        <div class="base-input">
          <div class="input-name">地 址</div>
          <input type="text" placeholder="请输入您的详细地址">
        </div>
        <div class="base-input">
          <div class="input-name">身份证号</div>
          <input type="text" placeholder="请输入您的身份证号码">
        </div>
        <div class="bank-card">
          <span>选择银行卡</span>
        </div>
      </div>
      <div style="height: .2rem;"></div>
      <div class="card-block">
        <div class="card-block-name">请上传身份证正反面</div>
      </div>
      <div style="height: .2rem;"></div>
      <div class="hand-photo">
        <div class="card-block-name">请上传手持证件的照片</div>
      </div>
      <div style="height: .4rem;"></div>
      <div class="button">提交</div>
      <div style="height: .4rem;"></div>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "Register",
    components: {
      Header
    }
  }
</script>

<style scoped>

  .register {
    height: 100%;
  }
  .info-wrapper {
    background: #F8F8F8;
    width: 100%;
    height: 100%;
  }
  .base-info {
    padding-left: .32rem;
    padding-right: .32rem;
    background: #ffffff;
    height: 5rem;
  }
  .base-title {
    height: .74rem;
    line-height: .74rem;
    color: #B5B5B5;
    font-weight: 500;
    font-size: .24rem;
  }
  .base-input {
    background: #F8F8F8;
    height: .76rem;
    line-height: .76rem;
    border-radius: .1rem;
    margin-bottom: .2rem;
  }
  .base-input input {
    background: #F8F8F8;

  }
  .input-name {
    display: inline-block;
    color: #515151;
    height: .4rem;
    width: 1.12rem;
    margin-left: .2rem;
    margin-right: .55rem;
  }
  .bank-card {
    background: #F8F8F8;
    height: .76rem;
    line-height: .76rem;
    border-radius: .1rem;
    margin-bottom: .44rem;
  }
  .card-block {
    height: 2.92rem;
    background: #ffffff;
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .card-block-name {
    height: .74rem;
    line-height: .74rem;
    color: #B5B5B5;
    font-size: .24rem;
  }
  .hand-photo {
    height: 3.45rem;
    background: #ffffff;
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .button {
    background:rgba(68,142,246,0.5);
    border-radius: .08rem;
    margin: 0 auto;
    color: #ffffff;
    height: .76rem;
    line-height: .76rem;
    text-align: center;
    width: 4.96rem;
  }
</style>
