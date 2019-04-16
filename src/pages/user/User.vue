<template>
  <div class="wrapper">
    <Header title="个人中心" to="/user"></Header>
    <div class="box" style="">
      <div class="people">
        <img class="avatar" src="/static/images/avatar.png" alt="">
        <div class="nickname">
          微信昵称
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="item-box">
      <div class="item-wrapper">
        <div class="item" @click="handleRoute(2)">
          <img class="item-img" src="/static/images/dollar@2x.png" alt="">
          <div class="item-right border-bottom">
            <span>待付款的项目</span>
            <img class="icon" src="/static/images/into_normal.png" alt="">
          </div>
        </div>
        <div class="item" @click="handleRoute(4)">
          <img class="item-img" src="/static/images/doing.png" alt="">
          <div class="item-right border-bottom">
            <span>进行中的项目</span>
            <img class="icon" src="/static/images/into_normal.png" alt="">
          </div>
        </div>
        <div class="item" @click="handleRoute(5)">
          <img class="item-img" src="/static/images/completed.png" alt="">
          <div class="item-right border-bottom">
            <span>完成的项目</span>
            <img class="icon" src="/static/images/into_normal.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "User",
    components: {
      Header: Header
    },
    data() {
      return {
        selected: true,
        order_url: '/user/order'
      }
    },
    methods: {
      handleRoute(status) {
        // this.$router.push(url)
        this.$router.push(this.order_url + '?status=' + status)
      },
      checkUserLogin() {
        this.$cookies.set('user', 'fdsfdsfs', 100);
        // console.log(this.$cookies.get('wx-user'));
        // this.$ajax.get('http://web.chuangxu.com/m/social_login/wexin').then(function (response) {
        //   // console.log(response.data)
        // })
      }
    },
    mounted() {
      this.checkUserLogin();
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    background: #F8F8F8;
  }
  .space {
    height: .8rem;
  }
  .box {
    width: 100%;
    margin: auto;
    overflow: hidden;
  }

  .people {
    position: relative;
    width: 100%;
    height: 4.13rem;
    text-align: center;
    z-index: 1;
  }

  .people:after {
    width: 120%;
    height: 4.13rem;
    position: absolute;
    left: -10%;
    top: 0;
    z-index: -1;
    content: '';
    border-radius: 0 0 50% 50%;
    background: linear-gradient(top, #50B8F3, #448EF6);;
  }

  .people .avatar {
    height: 1.44rem;
    width: 1.44rem;
    border-radius: .72rem;
    margin-top: 1.35rem;
  }

  .nickname {
    color: #ffffff;
    margin-top: .12rem;
    font-size: .3rem;
  }
  .mint-tabbar a {
    color: #515151;
    font-size: .24rem;
  }

  .item-box {
    padding-left: .32rem;
    padding-right: .32rem;
    background: #F8F8F8;
    text-align: center;
  }

  .item-wrapper {
    height: 3.38rem;
    margin: 0 auto;
    background: #ffffff;
  }

  .item {
    position: relative;
    height: 1.13rem;
    line-height: 1.13rem;
    text-align: left;
  }

  .item .item-img {
    height: .44rem;
    width: .44rem;
    float: left;
    margin-top: .34rem;
    margin-left: .2rem;
  }

  .item-right {
    vertical-align: middle;
    height: 100%;
    width: 6.04rem;
    float: right;
  }
  .item-right .icon {
    height: .36rem;
    width: .36rem;
    position: absolute;
    right: .2rem;
    top: .4rem;
  }
</style>
