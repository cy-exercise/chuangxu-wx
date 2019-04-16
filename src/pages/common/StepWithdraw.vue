<template>
  <div class="step-block">
    <div class="step">
      <div class="step-main step-border-green">
        <div class="step-icon-wrapper step-gray">
          <div class="step-icon-green"></div>
          <!--<img src="/static/images/time.png" alt="">-->
        </div>
        <span class="step-title">发起提现申请</span>
      </div>
    </div>
    <div class="step">
      <div class="step-main step-border-gray">
        <div class="step-icon-wrapper step-doing">
          <div class="step-icon-img"></div>
          <!--<img src="/static/images/time.png" alt="">-->
        </div>
        <span class="step-title">后台正在处理中</span>
      </div>
    </div>
    <div class="step-end">
      <div class="step-main-end">
        <div class="step-icon-wrapper step-gray">
          <div class="step-icon-gray"></div>
          <!--<img src="/static/images/time.png" alt="">-->
        </div>
        <span class="step-title">每周星期五我们将统一发帐</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Step"
  }
</script>

<style scoped>
  .step-block {
  }
  .item-title {
    height: .42rem;
    line-height: .42rem;
    margin-bottom: .24rem;
  }
  .step {
    height: 1.09rem;
    padding-left: 1.92rem;
  }
  .step-main {
    position: relative;
    height: 1.09rem;
  }
  .step-border {
    border-left: 1px;
    border-left-color: #64AA62;
  }
  .step-border-green {
    border-left: 1px;
    border-left-style: dashed;
    border-left-color: #64AA62;
  }
  .step-border-gray {
    border-left: 1px;
    border-left-style: solid;
    border-left-color: #B5B5B5;
  }



  .step-icon-wrapper {
    /*height: .4rem;*/
    /*opacity:1;*/
    /*width: .4rem;*/
    position: absolute;
    top: -.05rem;
    background: #ffffff;
  }
  .step-doing {
    left: -.2rem;
  }
  .step-gray{
    left: -.1rem;
  }
  .step-icon-img {
    height: .4rem;
    width: .4rem;
    background: url("/static/images/time.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
  }
  .step-icon-gray {
    height: .2rem;
    width: .2rem;
    border-radius: .1rem;
    background: #B5B5B5;
  }
  .step-icon-green {
    height: .2rem;
    width: .2rem;
    border-radius: .1rem;
    background: #64AA62;
  }
  .step-icon img  {
    top: 0;
    height: .4rem;
    width: .4rem;
  }
  .step-title {
    position: absolute;
    left: .4rem;
    top: -.02rem;
    /*margin-left: .4rem;*/
    color: #515151;
    font-size: .28rem;
    /*height: .4rem;*/
    /*line-height: .4rem;*/
    font-weight: 400;
  }

  .step-end {
    height: .8rem;
    padding-left: 1.92rem;
  }
  .step-main-end {
    position: relative;
    height: .8rem;
  }
</style>
