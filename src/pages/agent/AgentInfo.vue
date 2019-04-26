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
          <div class="code-share" @click="handleShare">
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
  import wx from "weixin-js-sdk"
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
        show: false,
        appId: '',
        timestamp: '',
        nonceStr: '',
        signature: ''
      }
    },
    methods: {
      handleShare() {
        _this = this
        wx.config({
          debug: false,
          appId: this.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
          timestamp: this.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.nonceStr, // 必填，生成签名的随机串
          signature: this.signature,// 必填，签名，见附录1
          //需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
          jsApiList: [
            'onMenuShareAppMessage','onMenuShareTimeline',
            'onMenuShareQQ','onMenuShareQZone'
          ]
        });


        //处理验证失败的信息
        wx.error(function (res) {
          console.log('验证失败返回的信息:',res);
        });
        //处理验证成功的信息
        wx.ready(function () {
          //              alert(window.location.href.split('#')[0]);
          //分享到朋友圈
          wx.onMenuShareTimeline({
            title: _this.newDetailObj.title, // 分享标题
            link: window.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: _this.newDetailObj.thu_image, // 分享图标
            success: function (res) {
              // 用户确认分享后执行的回调函数
              logUtil.printLog("分享到朋友圈成功返回的信息为:",res);
              _this.showMsg("分享成功!")
            },
            cancel: function (res) {
              // 用户取消分享后执行的回调函数
              logUtil.printLog("取消分享到朋友圈返回的信息为:",res);
            }
          });
          //分享给朋友
          wx.onMenuShareAppMessage({
            title: _this.newDetailObj.title, // 分享标题
            desc: _this.desc, // 分享描述
            link: window.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: _this.newDetailObj.thu_image, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function (res) {
              // 用户确认分享后执行的回调函数
              logUtil.printLog("分享给朋友成功返回的信息为:",res);
            },
            cancel: function (res) {
              // 用户取消分享后执行的回调函数
              logUtil.printLog("取消分享给朋友返回的信息为:",res);
            }
          });
          //分享到QQ
          wx.onMenuShareQQ({
            title: _this.newDetailObj.title, // 分享标题
            desc: _this.desc, // 分享描述
            link: window.location.href.split('#')[0], // 分享链接
            imgUrl: _this.newDetailObj.thu_image, // 分享图标
            success: function (res) {
              // 用户确认分享后执行的回调函数
              logUtil.printLog("分享到QQ好友成功返回的信息为:",res);
            },
            cancel: function (res) {
              // 用户取消分享后执行的回调函数
              logUtil.printLog("取消分享给QQ好友返回的信息为:",res);
            }
          });

          //分享到QQ空间
          wx.onMenuShareQZone({
            title: _this.newDetailObj.title, // 分享标题
            desc: _this.desc, // 分享描述
            link: window.location.href.split('#')[0], // 分享链接
            imgUrl: _this.newDetailObj.thu_image, // 分享图标
            success: function (res) {
              // 用户确认分享后执行的回调函数
              logUtil.printLog("分享到QQ空间成功返回的信息为:",res);
            },
            cancel: function (res) {
              // 用户取消分享后执行的回调函数
              logUtil.printLog("取消分享到QQ空间返回的信息为:",res);
            }
          });
        });
      }
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
