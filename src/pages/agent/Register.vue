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
        <div class="base-input">
          <div class="input-name bank-card-title">选择银行卡</div>
          <input type="text" placeholder="请选择银行卡并填写银行卡号">
        </div>
      </div>
      <div style="height: .2rem;"></div>
      <div class="card-block">
        <div class="card-block-name">请上传身份证正反面</div>
        <div class="card-front">
          <cube-upload
            ref="uploadFront"
            v-model="files"
            :action="action"
            @files-added="addedHandler('front')"
            @file-error="errHandler">
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
              <cube-upload-btn :multiple="false">
                <div>
                  <img src="/static/images/identity-card-front.png" alt="">
                </div>
              </cube-upload-btn>
            </div>
          </cube-upload>
        </div>
        <div class="card-back">
          <cube-upload
            ref="uploadBack"
            v-model="files_back"
            :action="action"
            @files-added="addedHandler('back')"
            @file-error="errHandler">
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in files_back" :file="file" :key="i"></cube-upload-file>
              <cube-upload-btn :multiple="false">
                <div>
                  <img src="/static/images/identity-card-front.png" alt="">
                </div>
              </cube-upload-btn>
            </div>
          </cube-upload>
        </div>
      </div>
      <div style="height: .2rem;"></div>
      <div class="hand-photo">
        <div class="card-block-name">请上传手持证件的照片</div>
        <div class="hand-card">
          <cube-upload
            ref="uploadHand"
            v-model="files_hand"
            :action="action"
            @files-added="addedHandler('hand')"
            @file-error="errHandler"
            @file-success="successHandler"
          >
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in files_hand" :file="file" :key="i"></cube-upload-file>
              <cube-upload-btn :multiple="false">
                <div>
                  <img src="/static/images/hand-card.png" alt="">
                </div>
              </cube-upload-btn>
            </div>
          </cube-upload>
        </div>
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
    data() {
      return {
        action: '//jsonplaceholder.typicode.com/photos/',
        files: [],
        files_back: [],
        files_hand: []
      }
    },
    components: {
      Header
    },
    methods: {
      addedHandler(type) {
        if (type === 'front') {
          const file = this.files[0]
          file && this.$refs.uploadFront.removeFile(file)
        } else if (type === 'back') {
          const file = this.files_back[0]
          file && this.$refs.uploadBack.removeFile(file)
        } else  {
          const file = this.files_hand[0]
          file && this.$refs.uploadHand.removeFile(file)
        }
      },
      errHandler(file) {
        // const msg = file.response.message
        this.$createToast({
          type: 'warn',
          txt: 'Upload fail',
          time: 1000
        }).show()
      },
      // 上传成功回调
      successHandler(file) {

      }
    }
  }
</script>

<style lang="stylus" scoped>

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
    font-size: .28rem;
    color: #B5B5B5;
  }
  .base-input input {
    background: #F8F8F8;

  }
  .input-name {
    display: inline-block;
    color: #515151;
    /*height: .4rem;*/
    width: 1.85rem;
    padding-left .18rem
    font-size: .28rem;
  }
  .bank-card input {
    font-size .28rem
    background #F8F8F8
    height .76rem
    width 3.67rem
    line-height .76rem
    float left
  }
  .bank-card-title
    position relative
    /*width 1.87rem*/
    height 100%
    /*float left*/
    font-size .28rem
    color #B5B5B5
    /*text-align center*/
    &:after
      position absolute
      content ""
      width 1px
      right .15rem
      height .4rem
      top 50%
      margin-top -.2rem
      background  rgba(81,81,81,.5)
  .bank-card span {
    font-size: .28rem;
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
    font-size: .28rem;
  }
  .card-front, .card-back {
    background: #F8F8F8;
    border-radius: .1rem;
    width: 3.33rem;
    height: 1.78rem;
  }
  .card-front {
    float: left;
  }
  .card-back {
    float: right;
  }
  .cube-upload
    .cube-upload-file, .cube-upload-btn
      margin: 0
      height: 1.78rem
    .cube-upload-file
      margin: 0
      + .cube-upload-btn
        margin-top: -1.78rem
        opacity: 0
>>>  .cube-upload-file-def
      width: 100%
      height: 100%
      .cubeic-wrong
        display: none
    .cube-upload-btn
      display: flex
      align-items: center
      justify-content: center
      > div
        text-align: center
      img
        display: inline-flex
        align-items: center
        justify-content: center
        width: .8rem
        height: .55rem
  .hand-card {
    width: 4.32rem;
    height: 2.31rem;
    background: #F8F8F8;
    border-radius: .1rem;
    margin 0 auto
  }
  .hand-card
    .cube-upload
      .cube-upload-file, .cube-upload-btn
        margin: 0
        height: 2.31rem
      .cube-upload-file
        margin: 0
        + .cube-upload-btn
          margin-top: -2.31rem
          opacity: 0
      >>>  .cube-upload-file-def
        width: 100%
        height: 100%
        .cubeic-wrong
          display: none
      .cube-upload-btn
        display: flex
        align-items: center
        justify-content: center
        > div
          text-align: center
        img
          display: inline-flex
          align-items: center
          justify-content: center
          width: 1.2rem
          height: 1.2rem
          /*margin-bottom: 20px*/
          /*font-size: 32px*/
          line-height: 1
          font-style: normal
          color: #fff

</style>
