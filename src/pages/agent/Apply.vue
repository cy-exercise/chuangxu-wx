<template>
  <div class="apply">
    <!--<Header title="政策和义务"></Header>-->
    <div class="apply-content">
      <div class="content-head border-bottom">关于申请代理的协议与介绍</div>
      <p class="content">
        创序医考宝为创序信息科技有限公司旗下的产品，是一款专注于医学考试的移动平台。为了开拓业务，巩固和拓展产品销售市场，创序医考宝开放了个人代理的合作渠道，授权个人用户代理创序医考宝的销售推广业务。申请成为个人代理的用户需同意并遵守《创序信息科技有限公司医考宝2019年代理协议》
      </p>
      <p class="protocol">
        <label>
          <div class="item-check">
                <span class="checkbox__input" :class="{'is-checked': checked}">
                  <span class="checkbox__inner"></span>
                  <input type="checkbox" class="checkbox__original" @click="handleCheck" v-model="checked" value="checked">
                </span>
          </div>
        </label>
        我同意并遵守
        <router-link to="/protocol" class="protocol-name">
          《创序信息科技有限公司医考宝2019 年代理协议》
        </router-link>
      </p>
    </div>
    <div class="button" @click="goAhead" :class="{ready: checked}">同意并继续申请</div>
  </div>
</template>

<script>
  // import Header from '../common/Header'
  export default {
    name: "Apply",
    data() {
      return {
        user: {},
        checked: false,
        ready: ''
      }
    },
    components: {
      // Header
    },
    methods: {
      goAhead() {
        if (this.checked) {
          let path = '/bind_phone'
          if (this.user && this.user.phone) {
            path = '/becomes'
          }
          this.$router.push(path)
        }
      },
      handleCheck() {

      },
      init() {
        //this.user = JSON.parse(localStorage.getItem('user'))
        this.$ajax.post('/api/v1/user/info').then(res => {
          this.$cookies.set('user_id', res.data.data.id);
          this.user = res.data.data;
          localStorage.setItem('user', JSON.stringify(res.data.data));
        })
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped>
  .apply-content {
    padding-left: .32rem;
    padding-right: .32rem;
  }
  .content-head {
    height: 1.1rem;
    line-height: 1.1rem;
    color: #515151;
    font-size: .32rem;
    font-weight: 500;
  }
  .content {
    color: #515151;
    font-size: .28rem;
    margin-top: .39rem;
    letter-spacing: .02rem;
    line-height: .4rem;
  }
  .protocol {
    height: .8rem;
    margin-top: .4rem;
    font-size: .28rem;
    line-height: .4rem;
  }
  .protocol-name {
    color: #28A6FE;
  }
  .button {
    height: .76rem;
    line-height: .76rem;
    background:rgba(68,142,246, .5);
    width: 6.85rem;
    text-align: center;
    margin: 0 auto;
    border-radius: .08rem;
    color: #ffffff;
    font-size: .28rem;
    font-weight: 400;
    margin-top: .4rem;
  }
  .ready {
    background:rgba(68,142,246,1);
  }

  .item-check {
    float: left;
    height: .96rem;
    line-height: .96rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-right: 5px;
    padding-top: .05rem;
  }

  .checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: .32rem;
    height: .32rem;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  }
  .checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
  }
  .checkbox__input ,.is-checked ,.checkbox__inner {
    /*background-color: #409eff;*/
    border-color: #409eff;
  }
  .checkbox__inner:after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 8px;
    left: 5px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
    transform-origin: center;
  }

  .checkbox__input.is-checked .checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
  }

  .checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    /*display: inline-block;*/
    line-height: 1;
    position: relative;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .checkbox__input.is-checked .checkbox__inner:after {
    transform: rotate(45deg) scaleY(1);
  }

</style>
