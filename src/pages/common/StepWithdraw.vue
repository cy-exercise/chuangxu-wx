<template>
  <div class="step-block">
    <div class="step" :class="{step_status_doing: status==='doing', step_status_done: status !== 'doing'}">
      <div class="step-main step-border-green">
        <div class="step-icon-wrapper step_gray">
          <div class="step_icon_green"></div>
        </div>
        <span class="step-title">发起提现申请</span>
      </div>
    </div>
    <div class="step" :class="{step_status_gray: status==='doing', step_status_done: status !== 'doing'}">
      <div class="step-main">
        <div class="step-icon-wrapper" :class="{step_doing: status === 'doing', step_gray: status !== 'doing'}">
          <div :class="{step_icon_img: status === 'doing',step_icon_green: status !== 'doing'}">
            <img src="@/assets/img/time.png" alt="" v-if="status === 'doing'">
          </div>
        </div>
        <span class="step-title">{{status==='doing' ? '后台正在处理中' : '处理完成'}}</span>
      </div>
    </div>
    <div class="step-end">
      <div class="step-main-end">
        <div class="step-icon-wrapper step_gray">
          <div :class="{step_icon_gray: status === 'doing',step_icon_green: status !== 'doing'}"></div>
        </div>
        <span class="step-title">{{step_end_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Step",
    props: {
      step_end_name: {
        default: '每周星期五我们将统一发帐'
      },
      status: {
        default: 'doing'
      }
    },
    data() {
      return {

      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .step-block {
    height: 100%;
    background: #ffffff;
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
  .step_status_doing .step-main{
    border-left: 1px;
    border-left-style: dashed;
    border-left-color: #64AA62;
  }
  .step_status_done .step-main {
    border-left: 1px;
    border-left-style: solid;
    border-left-color: #64AA62;
  }
  .step_status_gray .step-main {
    border-left: 1px;
    border-left-style: solid;
    border-left-color: #B5B5B5;
  }

  .step-border-green {

  }
  .step-icon-wrapper {
    /*height: .4rem;*/
    /*opacity:1;*/
    /*width: .4rem;*/
    position: absolute;
    top: -.05rem;
    /*background: #ffffff;*/
  }
  .step_doing {
    left: -.2rem;
  }
  .step_gray{
    left: -.1rem;
  }
  .step_icon_img {
    /*height: .4rem;*/
    /*width: .4rem;*/
    /*background: url("@/assets/img/time.png");*/
    /*background-repeat:no-repeat;*/
    /*background-size:100% 100%;*/
  }
  .step_icon_img {
    height: 20px;
    width: 20px;
    display: flex;
    background: #ffffff;
  }
  .step_icon_img img {
    height: 20px;
    width: 20px;
    border: none;
    border-radius: 10px
  }
  .step_icon_gray {
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #B5B5B5;
  }
  .step_icon_green {
    height: 10px;
    width: 10px;
    border-radius: 5px;
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
