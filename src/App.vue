<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      loginCheck() {
        // 判断当前页页是否为登录页
        if (this.$route.path === '/login') return;
        if (!this.$cookies.get('access_token')) {
          // window.location.href = 'https://chuangxu.natapp4.cc/m/auth/weixin/login'
          window.location.href = 'http://cy123.natapp1.cc/m/auth/weixin/login'
          // window.location.href = 'https://nurse.chuangxu.cn/m/auth/weixin/login'
        }
      }
    },
    created() {
      this.loginCheck()
    }
  }
</script>

<style>
#app {
  height: 100%;
}
body, html {
  width:100%;
  height:100%;
}
</style>
