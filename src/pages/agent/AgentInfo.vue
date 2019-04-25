<template>
  <div>
    <div class="agent-not" v-if="!agent">
      <AgentNot></AgentNot>
    </div>
    <div class="agent-info" v-if="agent">
      <div class="phone-block">
        <div class="phone-text border-bottom">
          我的代理手机号码
        </div>
        <div class="phone">{{agent.phone}}
        </div>
      </div>
      <div style="height: .2rem;"></div>
      <div class="code-block">
        <div class="code-head border-bottom">
          <div class="code-text">
            <span class="code-title">我的代理码</span>
            <!--<span class="code-number">(优惠码746582)</span>-->
          </div>
          <div class="code-share">
            分享
            <img src="/static/images/share_normal.png" alt="">
          </div>
        </div>
        <div class="code-content">
          <img :src="agent.qrcode_uri1" alt="" v-if="agent.qrcode_uri1">
          <div v-show="!agent.qrcode_uri1" class="appling" >申请中...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  AgentNot from "../common/AgentNot"
  export default {
    name: "AgentInfo",
    props:{
      agent: Object
    },
    components: {
      AgentNot
    },
    data() {
      return {
        show: false
      }
    },
    methods: {

    },
    mounted() {
    }
  }
</script>

<style scoped>
  .agent-info {
    margin-top: .2rem;
  }
  .phone-block {
    background: #ffffff;
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .phone-text {
    /*height: .96rem;*/
    line-height: .96rem;
    font-size: .24rem;
    font-weight: 500;
    color: #B5B5B5;
  }
  .phone {
    height: 1.13rem;
    line-height: 1.13rem;
    color: #515151;
    font-size: .28rem;
    font-weight: 400;
  }
  .code-block {
    margin-left: .34rem;
    margin-right: .34rem;
    height: 7.42rem;
    background: #ffffff;
    border-radius: .1rem;
  }
  .code-head {
    font-size: 0;
    height: .96rem;
    padding-left: .4rem;
    padding-right: .4rem;
  }
  .code-text {
    float: left;
    line-height: .96rem;
  }
  .code-share {
    float: right;
    color: #448EF6;
    line-height: .96rem;
    font-size: .28rem;
    font-weight: 400;
  }
  .code-title {
    font-size: .28rem;
    color: #515151;
    font-weight: 500;
  }
  .code-number {
    color: #B5B5B5;
    font-weight: 500;
    font-size: .24rem;
  }
  .code-share img {
    height: .44rem;
    width: .44rem;
  }
  .code-content {
    text-align: center;
    line-height: 6.45rem;
  }
  .appling {
    display: flex;
    width: 100%;
    font-size: .32rem;
    justify-content: center;
    color: #515151;
  }
</style>
