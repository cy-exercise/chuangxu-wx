<template>
  <div class="step-block">
    <div class="item-title">项目进度</div>
    <div class="step">
      <div class="step-main step-border">
        <div class="step-icon-wrapper step-doing">
          <div class="step-icon-img"></div>
          <!--<img src="@/assets/img/time.png" alt="">-->
        </div>
        <span class="step-title">图表制作</span>
        <span class="step-date">2018/12/29</span>
      </div>
    </div>
    <div class="step-end">
      <div class="step-main-end">
        <div class="step-icon-wrapper step-gray">
          <div class="step-icon-gray"></div>
          <!--<img src="@/assets/img/time.png" alt="">-->
        </div>
        <span class="step-title">图表制作</span>
        <span class="step-date">2018/12/29</span>
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
    border-left: 1px dashed green;
  }
  /*.step-icon {*/
    /*position: absolute;*/
    /*left: -.2rem;*/
    /*top: 0;*/
    /*height: .4rem;*/
    /*width: .4rem;*/
    /*background: url("@/assets/img/time.png");*/
    /*background-repeat:no-repeat;*/
    /*background-size:100% 100%;*/
  /*}*/
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
    left: -.09rem;
  }
  .step-icon-img {
    height: .4rem;
    width: .4rem;
    background: url("@/assets/img/time.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
  }
  .step-icon-gray {
    height: .2rem;
    width: .2rem;
    border-radius: .1rem;
    background: #B5B5B5;
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
  .step-date {
    top: -.02rem;
    position: absolute;
    left: -1.82rem;
    /*height: .4rem;*/
    /*line-height: .4rem;*/
    font-size: .28rem;
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
