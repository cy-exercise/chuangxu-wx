<template>
  <div class="register">
    <!--<Header title="填写基本信息" to="/becomes"></Header>-->
    <div class="info-wrapper">
      <div class="base-info">
        <div class="base-title">申请代理的账号（手机号码）</div>
        <div class="base-input">
          <div class="input-name">姓名<span></span></div>
          <input type="text" placeholder="请输入真实姓名" v-model="name">
        </div>
        <div class="base-input">
          <div class="input-name">地址<span></span></div>
          <input type="text" placeholder="请输入您的详细地址" v-model="address">
        </div>
        <div class="base-input">
          <div class="input-name">身份证号<span></span></div>
          <input type="text" placeholder="请输入您的身份证号码" v-model="id_card">
        </div>
        <div class="base-input">
          <div class="input-name bank-card-title" @click="showPicker">{{bank_name ? bank_name : '选择银行卡'}}</div>
          <input type="text" placeholder="请选择银行卡并填写银行卡号" v-model="bank_card">
        </div>
      </div>
      <div style="height: .2rem;"></div>
      <div class="card-block">
        <div class="card-block-name">请上传身份证正反面</div>
        <div class="card-front">
          <cube-upload
            ref="uploadFront"
            v-model="files"
            :auto="auto"
            :action="action"
            @files-added="addedHandler('front')"
            @file-error="errHandler"
            @file-submitted="submittedFrontHandler"
          >
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in files" :file="file" :key="i">
                <div class="cube-upload-file">
                  <div class="cube-upload-file-def"
                       :style="`background-image: url(${file.url});`">
                    <i class="cubeic-wrong"></i>
                    <div class="cube-upload-file-state cube-upload-file_stat" v-show="show === 'front'">
                      <!--<i class="cube-upload-file-status cubeic-warn"></i> -->
                      <!--<span class="cube-upload-file-progress">100%</span>-->
                      <cube-loading></cube-loading>
                    </div>
                  </div>
                </div>
              </cube-upload-file>
              <cube-upload-btn :multiple="false">
                <div>
                  <img src="@/assets/img/identity-card-front.png" alt="">
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
            :auto="auto"
            @files-added="addedHandler('back')"
            @file-error="errHandler"
            @file-submitted="submittedBackHandler"
          >
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in files_back" :file="file" :key="i">
                <div class="cube-upload-file">
                  <div class="cube-upload-file-def"
                       :style="`background-image: url(${file.url});`">
                    <i class="cubeic-wrong"></i>
                    <div class="cube-upload-file-state cube-upload-file_stat" v-show="show === 'back'">
                      <!--<i class="cube-upload-file-status cubeic-warn"></i> -->
                      <!--<span class="cube-upload-file-progress">100%</span>-->
                      <cube-loading></cube-loading>
                    </div>
                  </div>
                </div>
              </cube-upload-file>
              <cube-upload-btn :multiple="false">
                <div>
                  <img src="@/assets/img/identity-card-front.png" alt="">
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
            :auto="auto"
            @files-added="addedHandler('hand')"
            @file-error="errHandler"
            @file-submitted="submittedHandHandler"
          >
            <div class="clear-fix">
              <cube-upload-file v-for="(file, i) in files_hand" :file="file" :key="i">
                <div class="cube-upload-file">
                  <div class="cube-upload-file-def"
                       :style="`background-image: url(${file.url});`">
                    <i class="cubeic-wrong"></i>
                    <div class="cube-upload-file-state cube-upload-file_stat" v-show="show === 'hand'">
                      <!--<i class="cube-upload-file-status cubeic-warn"></i> -->
                      <!--<span class="cube-upload-file-progress">100%</span>-->
                      <cube-loading></cube-loading>
                    </div>
                  </div>
                </div>
              </cube-upload-file>
              <cube-upload-btn :multiple="false">
                <div>
                  <img src="@/assets/img/hand-card.png" alt="">
                  <!--<cube-loading></cube-loading>-->
                </div>
              </cube-upload-btn>
            </div>
          </cube-upload>
        </div>
      </div>
      <div style="height: .4rem;"></div>
      <div class="button" @click="handleSubmit"
           :class="{can_submit:  gitStatus()}"
      >提交
      </div>
      <div style="height: .4rem;"></div>
    </div>
  </div>
</template>

<script>
  import OSS from 'ali-oss'

  const qs = require('qs');
  // import Header from '../common/Header'

  export default {
    name: "Register",
    data() {
      return {
        action: '/upload',
        files: [],
        files_back: [],
        files_hand: [],
        auto: false,
        name: '',
        phone: '',
        address: '',
        id_card: '',
        bank: '',
        bank_name: '',
        bank_card: '',
        id_url1: '',
        id_url2: '',
        face_url: '',
        user: '',
        brand_id: '',
        column1: [
          {
            "text": "工商银行",
            "value": "1002"
          },{
            "text": "农业银行",
            "value": "1005"
          },{
            "text": "中国银行",
            "value": "1026"
          },{
            "text": "建设银行",
            "value": "1003"
          },{
            "text": "招商银行",
            "value": "1001"
          },{
            "text": "邮储银行",
            "value": "1066"
          },{
            "text": "交通银行",
            "value": "1020"
          },{
            "text": "浦发银行",
            "value": "1004"
          },{
            "text": "民生银行",
            "value": "1006"
          },{
            "text": "兴业银行",
            "value": "1009"
          },{
            "text": "平安银行",
            "value": "1010"
          },{
            "text": "中信银行",
            "value": "1021"
          },{
            "text": "华夏银行",
            "value": "1025"
          },{
            "text": "广发银行",
            "value": "1027"
          },{
            "text": "光大银行",
            "value": "1022"
          },{
            "text": "北京银行",
            "value": "1032"
          },{
            "text": "宁波银行",
            "value": "1056"
          }
        ],
        show: '',
        canSubmit: this.name
      }
    },
    components: {
      // Header
    },
    methods: {
      addedHandler(type) {

        let file;
        if (type === 'front') {
          file = this.files[0]
          file && this.$refs.uploadFront.removeFile(file)
        } else if (type === 'back') {
          file = this.files_back[0]
          file && this.$refs.uploadBack.removeFile(file)
        } else {
          file = this.files_hand[0]
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

      submittedFrontHandler(file) {
        this.show = 'front'
        this.upload(file, 'front')
      },
      submittedBackHandler(file) {
        this.show = 'back'
        this.upload(file, 'back')
      },
      submittedHandHandler(file) {
        this.show = 'hand'
        this.upload(file, 'hand')
      },
      upload(file, type) {
        let self = this;
        this.$ajax.get('/api/v1/config/sts/token').then(res => {
          // console.log(res.data)
          let client = new OSS({
            region: 'oss-cn-shanghai',
            accessKeyId: res.data.data.access_key_id,
            accessKeySecret: res.data.data.access_key_secret,
            bucket: 'chuangxu',
            stsToken: res.data.data.security_token
          })
          let user_id = this.$cookies.get('user_id');
          var timestamp = (new Date()).getTime();
          let name = 'upload/agent/' + timestamp + user_id + '.' + file.file.type.split("/")[1]
          client.put(name, file.file).then(function (r1) {
            console.log('put success: %j', r1);
            return client.get(name);
          }).then(function (r2) {
            //console.log('get success: %j', r2);
            if (type === 'front') {
              self.id_url1 = r2.res.requestUrls[0]
            }
            if (type === 'back') {
              self.id_url2 = r2.res.requestUrls[0]
            }
            if (type === 'hand') {
              self.face_url = r2.res.requestUrls[0]
            }
            self.show = ''
          }).catch(function (err) {
            console.error('error: %j', err);
          });
        })
      },
      handleSubmit() {
        if (!this.gitStatus()) {
          //return false;
          if (!this.bank) {
            alert('请选择银行')
          }
          if (!this.bank_card) {
            alert('银行账户不能为空')
          }
          if (!this.address) {
            alert('地址不能为空')
          }
          if (!this.id_card) {
            alert('身份证号不能为空')
          }
          if (!this.id_url1) {
            alert('姓名不能为空')
          }
          if (!this.id_url2) {
            alert('身份证不能为空')
          }
          if (!this.face_url) {
            alert('身份证不能为空')
          }
        }
        let data = {
          name: this.name,
          phone: this.phone,
          address: this.address,
          id_card: this.id_card,
          bank: this.bank_name,
          bank_card: this.bank_card,
          brand_id: this.brand_id,
          id_uri1: this.id_url1,
          id_uri2: this.id_url2,
          face_uri: this.face_url
        }
        this.$ajax.post('api/v1/agent/create/agents', qs.stringify(data)).then(res => {
          let agent = res.data.data
          this.showSuccess()
          this.$router.push({
            path: '/apply_complete',
            query: {
              agent_id: agent.id,
              created_at: agent.created_at
            }
          })

        })
      },
      showSuccess() {
        this.$createDialog({
          type: 'alert',
          title: '我是标题',
          content: '注册成功',
          icon: 'cubeic-smile'
        }).show()
      },
      showPicker() {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: '选择银行卡',
            data: [this.column1],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.picker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        // this.$createDialog({
        //   type: 'warn',
        //   content: `${selectedText}`,
        //   icon: 'cubeic-alert'
        // }).show()
        this.bank_name = selectedText[0]
        this.bank = selectedVal[0]
        console.log(selectedText)
      },
      gitStatus() {
        return this.name && this.address && this.id_card && this.bank
          && this.bank_card && this.id_url1 && this.id_url2 && this.face_url
      },
      init() {
        this.brand_id = this.$route.query.brand_ids
        if (this.$route.query.phone) {
          this.phone = this.$route.query.phone
        } else {
          const user = JSON.parse(localStorage.getItem('user'))
          this.phone = user.phone
        }
      }
    },
    mounted() {
      this.init()
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
    margin-bottom: .2rem;
    font-size: .28rem;
    color: #B5B5B5;
    border-radius: .1rem;
    display flex;
  }

  .base-input input {
    background: #F8F8F8;
    flex 1
    padding-left .1rem;
    border-radius: .1rem;
  }

  .input-name {
    display: inline-block;
    color: #515151;
    /*height: .4rem;*/
    min-width: 1.85rem;
    padding-left .18rem
    font-size: .28rem;
    text-align justify;
    padding-right: .4rem;
    box-sizing border-box;
  }
  .input-name span {
    display:inline-block;
    /*padding-left: 100%;*/
    width:100%;
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
      background rgba(81, 81, 81, .5)

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
    background: rgba(68, 142, 246, 0.5);
    border-radius: .08rem;
    margin: 0 auto;
    color: #ffffff;
    height: .76rem;
    line-height: .76rem;
    text-align: center;
    width: 4.96rem;
    font-size: .28rem;
  }

  .button.can_submit {
    background: rgba(68, 142, 246, 1);
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

  >>> .cube-upload-file-def
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

      >>> .cube-upload-file-def
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
