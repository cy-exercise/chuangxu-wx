<template>
  <div class="bind">
    <Header title="绑定手机号" to="/user"></Header>
    <div class="bind-wrapper">
      <div class="bind-title">申请代理的账号（手机号码）</div>
      <div class="input-block">
        <div class="phone-left">
          <img class="phone-icon" src="/static/images/phone.png" alt="">
          <span class="phone-prefix">+86</span>
        </div>
        <input class="phone-input" type="text" placeholder="请输入手机号码">
      </div>
      <div class="code-block">
        <div class="code-block-main">
          <img class="code-icon" src="/static/images/code.png" alt="">
          <input type="text" placeholder="请输入验证码" class="code-input">
        </div>
        <div class="code-button">获取验证码</div>
      </div>
    </div>
    <div style="height: .4rem"></div>
    <div class="button">下一步</div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "BindPhone",
    components: {
      Header
    }
  }
</script>

<style scoped>
  .bind-title {
    height: .76rem;
    line-height: .76rem;
    color: #B5B5B5;
    font-size: .24rem;
    font-weight: 500;
  }
  .bind-wrapper {
    padding-right: .32rem;
    padding-left: .32rem;
  }
  .input-block {
    display: flex;
    /*align-items: center;*/
    /*justify-content: center;*/
    padding-left: .19rem;
    height: .76rem;
    line-height: .76rem;
    background: #F8F8F8;
    border-radius: .1rem;
    margin-bottom: .2rem;
  }
  .phone-left {
    width: 1.32rem;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    /*justify-content: center;*/
  }
  .phone-left:after {
    position: absolute;
    content: "";
    width: 1px;
    right: 0;
    height: .5rem;
    top: 50%;
    margin-top: -.25rem;
    background:  #D2D2D2;
  }
  .phone-icon {
    width: .3rem;
    height: .44rem;
    background: url("/static/images/phone.png");
    background-size: 100% 100%;
    display: inline-block;
    margin-right: .21rem;
    /*margin-top: .16rem;*/
  }
  .phone-prefix {
    display: inline-block;
    height: .4rem;
    line-height: .4rem;
    width: .51rem;
    margin-right: .11rem;
    font-size: .28rem;
  }
  .phone-input {
    background: #F8F8F8;
    font-size: .28rem;
    color: #B5B5B5;
    margin-left: .23rem;
  }
  .code-block {
    display: flex;
    height: .76rem;
    line-height: .76rem;
    padding-left: .19rem;
    background: #F8F8F8;
    border-radius: .1rem;
  }
  .code-block-main {
    display: flex;
    align-items: center;
    width: 4.68rem;
    position: relative;
  }
  .code-block-main:after {
    position: absolute;
    content: "";
    width: 1px;
    right: 0;
    height: .5rem;
    top: 50%;
    margin-top: -.25rem;
    background:  #D2D2D2;
  }
  .code-icon {
    height: .44rem;
    width: .4rem;
    margin-right: .22rem;
  }
  .code-input {
    background: #F8F8F8;
    color: #B5B5B5;
    font-size: .3rem;
    font-weight: 400;
    height: 100%;
  }
  .code-button {
    color: #28B2FE;
    font-weight: 400;
    font-size: .28rem;
    flex: 1;
    text-align: center;
  }
  .button {
    background: rgba(68,142,246,0.5);
    border-radius: .08rem;
    margin: 0 auto;
    color: #ffffff;
    height: .76rem;
    line-height: .76rem;
    text-align: center;
    width: 4.96rem;
    font-size: .28rem;
  }
</style>
