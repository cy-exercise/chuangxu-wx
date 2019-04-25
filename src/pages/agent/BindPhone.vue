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
        <input class="phone-input" type="number" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号码" v-model="phone">
      </div>
      <div class="code-block">
        <div class="code-block-main">
          <img class="code-icon" src="/static/images/code.png" alt="">
          <input type="number" oninput="if(value.length>6)value=value.slice(0,6)" placeholder="请输入验证码" class="code-input" v-model="code">
        </div>
        <div class="code-button" >
          <span class="send-code" v-show="show" @click="getCode">获取验证码</span>
          <span class="send-off" v-show="!show">{{second}} s</span>
        </div>
      </div>
    </div>
    <div style="height: .4rem"></div>
    <div class="button" :class="{next: phone && code}" @click="handleNext">下一步</div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "BindPhone",
    components: {
      Header
    },
    data() {
      return {
        phone: '',
        type: 4,
        show: true,
        second: 0,
        code: '',
        valid_code: '',
        next_to: '/becomes'
      }
    },
    methods: {
      getCode() {
        if (!this.phone) {
          this.$createDialog({
            type: 'alert',
            title: '请输入手机号',
            icon: 'cubeic-alert'
          }).show()
          return false;
        }
        const mobile_mode = /^1[34578]\d{9}$/;
        if (!mobile_mode.test(this.phone)) {
          this.$createDialog({
            type: 'alert',
            title: '手机号格式错误',
            icon: 'cubeic-alert'
          }).show()
          return false;
        }
        let data =  {
          phone: this.phone,
          type: this.type
        };
        this.setTimeOut();
        this.$ajax.post('/api/v1/sms', data).then(res => {
          if (res.data.code === 200) {
            this.valid_code = res.data.data
          } else {
            this.$createDialog({
              type: 'alert',
              title: res.data.message,
              icon: 'cubeic-alert'
            }).show()
          }
        })
          .catch((error) => {
            this.$createDialog({
              type: 'alert',
              title: error.response.data.message,
              icon: 'cubeic-alert'
            }).show()
            clearInterval(this.timer);
          })
      },
      setTimeOut(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.second = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.second > 0 && this.second <= TIME_COUNT) {
              this.second--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      handleNext() {
        // console.log(this.code);
        // console.log(this.valid_code)
        // if (this.code !== this.valid_code) {
        //   this.$createDialog({
        //     type: 'alert',
        //     title: '验证码错误',
        //     icon: 'cubeic-alert'
        //   }).show()
        //   return false;
        // }
        this.bindPhone();
      },
      bindPhone() {
        let user_id = this.$cookies.get('user_id');
        this.$ajax.put(`/api/v1/user/${user_id}/phone`, {phone: this.phone, code: this.code}).then(res => {
          if (res.data.code === 200) {
            this.$createDialog({
              type: 'alert',
              title: res.data.message,
              icon: 'cubeic-alert'
            }).show()
            setTimeout(() => {
              this.$router.push(this.next_to + `?phone=${this.phone}`)
            }, 3000)
          }
        }).catch(err=>{
          this.$createDialog({
            type: 'alert',
            title: error.response.data.message,
            icon: 'cubeic-alert'
          }).show()
        })
      }
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
    /*color: #B5B5B5;*/
    margin-left: .23rem;
    padding-left: .1rem;
    box-sizing: border-box;
    flex: 1;
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
    padding-right: .2rem;
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
    /*color: #B5B5B5;*/
    font-size: .3rem;
    font-weight: 400;
    height: 100%;
    padding-left: .1rem;
    /*margin-right: .4rem;*/
    flex: 1;
    /*box-sizing: border-box;*/
  }
  .code-button {
    color: #28B2FE;
    font-weight: 400;
    font-size: .28rem;
    flex: 1;
    text-align: center;
  }
  .code-button .send-off {
    color: #B5B5B5;
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
  .next {
    background: rgba(68,142,246,1);
  }
</style>
