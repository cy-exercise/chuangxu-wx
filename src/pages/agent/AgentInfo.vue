<template>
  <div>
    <div class="agent-not" v-if="!agent.id">
      <AgentNot :brand="brand"></AgentNot>
    </div>
    <div class="agent-info" v-if="agent.id">
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
          <!--<div class="code-share" @click="handleShare">-->
            <!--分享-->
            <!--<img src="@/assets/img/share_normal.png" alt="">-->
          <!--</div>-->
        </div>
        <div class="code-content">
          <img :src="agent.qrcode_uri1" alt="" v-if="agent.qrcode_uri1">
          <div v-show="!agent.qrcode_uri1" class="appling">审核中...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AgentNot from "../common/AgentNot"
  import wx from "weixin-js-sdk"

  export default {
    name: "AgentInfo",
    props: {
      agent: Object,
      brand: String
    },
    components: {
      AgentNot
    },
    data() {
      return {
        show: false,
        appId: '',
        timestamp: '',
        nonceStr: '',
        signature: '',
        wxjssdk: {},
        shage: {
          title: '护考',
          img: ''
        },
        title: '创序医考宝',
        img: 'https://n-as.chuangxu.cn/bd/bao.png',
        desc: '海量题库、考点推送、科学记忆、高效备考！扫码立享优惠，最高减50！！！',
        link: 'https://bao.chuangxu.cn/download'
      }
    },
    methods: {
      handleShare() {

        wx.config({
          debug: false,
          appId: this.wxjssdk.appId,
          timestamp: this.wxjssdk.timestamp,
          nonceStr: this.wxjssdk.nonceStr,
          signature: this.wxjssdk.signature,
          jsApiList: this.wxjssdk.jsApiList
        });

        //处理验证失败的信息
        wx.error(function (res) {
          console.log('验证失败返回的信息:', res);
        });
        let _this = this
        // 处理验证成功的信息
        let share = {
          title: _this.title, // 分享标题
          desc: _this.desc, // 分享描述
          link: _this.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _this.img, // 分享图标
          success: function (res) {
            // 用户确认分享后执行的回调函数
          },
          cancel: function (res) {
            // 用户取消分享后执行的回调函数
          },
          fail: function (res) {
            //alert(JSON.stringify(res))
          }
        }
        wx.ready(function () {
          // 分享给朋友、qq好友
          wx.updateAppMessageShareData(share)
          // 朋友圈、qq空间
          wx.updateTimelineShareData(share)

        });
      },
      getWxjssdk() {
        this.$ajax.get('/api/v1/config/wx/jssdk?url=' + encodeURIComponent(window.location.href.split('#')[0])).then(res => {
          this.wxjssdk = res.data
          this.handleShare()
        })
      },
    },
    mounted() {

    },
    created() {
      this.getWxjssdk()
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
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 6.45rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .code-content img {
    height: 5.66rem;
    width: 5.66rem;
  }

  .appling {
    display: flex;
    width: 100%;
    font-size: .32rem;
    justify-content: center;
    color: #515151;
  }
</style>
